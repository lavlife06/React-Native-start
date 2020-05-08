//  rnf rncredux rnfs
import React, { useState } from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import Header from './shared/header';

const getFonts = () =>
  Font.loadAsync({
    craftyboys: require('./assets/fonts/craftyboys.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    // return (
    //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //     <View style={globalStyles.container}>
    //       <Navigator />
    //     </View>
    //   </TouchableWithoutFeedback>
    // );
    return (
      <SafeAreaProvider>
        <SafeAreaView forceInset={{ top: 'always' }} style={{ flex: 1 }}>
          <Navigator />
        </SafeAreaView>
      </SafeAreaProvider>
    );
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
