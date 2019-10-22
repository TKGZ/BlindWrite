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

//calls the vibration every time an area is touched


//later make it it's own props to handle vibration tasks!


export default function HomeScreen(props) {

  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);


  var titleStyle = {
    color: "red",
    fontSize: 25,
  };

  var circleStyle = {
    width: 200,
    height: 200,
    borderRadius: 80/2,
    backgroundColor: 'blue',
  }

  var surfaceStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  }
  //responder props to detect hand gestures relative to the view!!!

  //when the action is started


  //Defining conditions under which our view wants to be a responder
  //here: when something moves on it!
  //yes!
  function onStartShouldSetResponder(evt)
  {
    return true;
  }

  function onMoveShouldSetResponder(evt)
  {
    return true;
  }

  //once view becomes a responder, we want it to react as long as the element is still on the screen!
  function onResponderMove(evt)
  {
    //tryVibration(evt);
    setLocationX(evt.nativeEvent.pageX);
    setLocationY(evt.nativeEvent.locationY);
  }

  function tryVibration()
  {
    Vibration.vibrate(50);
    //alert('tap!');
    return(null);
  }

  //try updating the location on the screen!!!
  //if within the location, then vibrate
  //else don't vibrate
  //easy way of checking within location?


  
  return (
    <View
      style={styles.container}
      
    >  
        <Text style={titleStyle}>Location X: {Math.round(locationX)} </Text>
        <Text style={titleStyle}>Location Y: { (locationY)} </Text>
        <View 
          style={backgroundColor="blue"}
          onMoveShouldSetResponder={onMoveShouldSetResponder}
          onStartShouldSetResponder={onStartShouldSetResponder}
          onResponderMove={onResponderMove}></View>
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

  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
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
