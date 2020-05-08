import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  home: {
    screen: Home,
    navigationOptions: {
      title: 'home',
      headerShown: false,
    },
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     headerTitle: () => <Header title="GameZone" navigation={navigation} />,
    //   };
    // },
  },
  reviewdetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      headerShown: false,
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(
  screens
  //  {
  // initialRouteName: Home,
  // defaultNavigationOptions: {
  //   // headerStyle: {
  //   //   // backgroundColor: 'lightgreen',
  //   //   // height: 40,
  //   // },
  //   // headerShown: false,
  // },
  // headerTintColor:{}
  // headerTitleStyle: {},
  // headerShown: false,
  // },
  // }
);

export default HomeStack;
