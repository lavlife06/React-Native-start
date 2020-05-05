import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../shared/header';

const screens = {
  home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />,
      };
    },
  },
  reviewdetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      // headerShown: false,
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'lightgreen',
      height: 40,
    },
    // headerShown: false,
  },
});

export default HomeStack;
