//  rnf rncredux rnfs
import React, { useState } from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import { globalStyles } from './styles/global';

const getFonts = () =>
  Font.loadAsync({
    craftyboys: require('./assets/fonts/craftyboys.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={globalStyles.container}>
          <Navigator />
        </View>
      </TouchableWithoutFeedback>
    );
    // return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

export default App;
