import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import { globalStyles } from '../styles/global';

const About = () => {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default About;
