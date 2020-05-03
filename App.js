//  rnf rncredux rnfs
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* <View style={styles.container}></View> */}
      <Home />
      <About />
      <ReviewDetails />
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
