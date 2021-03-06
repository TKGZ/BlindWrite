import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
  Vibration,

} from 'react-native';

import { MonoText } from '../components/StyledText';

function TouchShape(props){

  
  function tryVibration()
  {
    Vibration.vibrate(50);
    //alert('tap!');
  }

  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  var x, y;

  function onStartShouldSetResponder(evt)
  {
    return true;
  }

  function onMoveShouldSetResponder(evt)
  {
    return true;
  }

  function onResponderMove(evt)
  {
    x =  evt.nativeEvent.pageX;
    y = evt.nativeEvent.pageY;

    //tryVibration(evt);
    setLocationX(x);
    setLocationY(y);

    if ((23 < x && x < 84 && 270 < y && y < 553)
    || (84 < x && x < 207 && 510 < y && y < 553))
    {
      tryVibration()
    }
  }


  return (
    <View
      alignItems="stretch"
      flexDirection="column"
      justifyContent="center"
    >
      <Text style={styles.title}>Location X: {Math.round(locationX)} </Text>
      <Text style={styles.title}>Location Y: {Math.round(locationY)} </Text>
      <View
        alignItems="stretch"
        flexDirection="column"
        justifyContent="center"
        onMoveShouldSetResponder={onMoveShouldSetResponder}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onResponderMove={onResponderMove}>
        {props.children}
      </View>
    </View>
  );
}

//later make it it's own props to handle vibration tasks!



export default function HomeScreen(props) {


  //try updating the location on the screen!!!
  //if within the location, then vibrate
  //else don't vibrate
  //easy way of checking within location?


  
  return (
    <View
      style={styles.container}
      alignItems="stretch"
      flexDirection="column"
      justifyContent="center"
    >  
        <Text>Main Screen</Text>
        <TouchShape>
          <View style={styles.bigBox} 
          alignItems="stretch"
          flexDirection="column"
          justifyContent="center">
            <Text style={{fontSize: 400, fontWeight: "bold", color: "black"}}>
              L
            </Text>
          </View>
        </TouchShape>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}


const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    color: 'red',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 300/2,
    backgroundColor: 'blue',
  },
  bigBox: {
    width: "100%",
    height: 600,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },


  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
