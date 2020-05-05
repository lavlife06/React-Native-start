import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default ({ title, navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    marginBottom: 21,
    marginRight: 85,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    // marginLeft: 70,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 0,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginLeft: 70,
  },
});
