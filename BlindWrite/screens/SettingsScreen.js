import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  View,
  Text,
} from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text>
        <h1>
          Settings page
          Example: 
            - ShowShape (should we display the shape?)
            - Vibration mode
            - Vibration strength
        </h1>
      </Text>
      
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
