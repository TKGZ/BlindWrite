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
  var mainStyle = {
    color: "red",
    fontSize: 25,
  };

  return (
    <View>
      <Text style={mainStyle}>
        This is a simple Settings Page

      </Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
