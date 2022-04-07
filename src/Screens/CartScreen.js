import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import CartItem from '../Components/CartItem';

export const CartScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <ScrollView style={{flex: 1}}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </SafeAreaView>
  );
};
