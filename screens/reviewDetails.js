import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import Header from '../shared/header';

const ReviewDetails = ({ navigation }) => {
  //  navigation comes from screen.navigation we set in homeStack
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  let rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Header title={'ReviewDetails'} navigation={navigation} />
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('title')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('body')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('rating')}
        </Text>
      </Card>
      <View style={styles.rating}>
        <Text>GameZone Rating: </Text>
        <Image source={images.ratings[rating]}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
