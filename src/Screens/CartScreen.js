import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CartItem from '../Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';

export const CartScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />

      <ScrollView style={{ flex: 1 }}>
        {cart.cartItems.length !== 0 ?
          cart.cartItems.map(item => (
            <CartItem productInfo={item} />
          )) :
          <Text>Scan barcode or search to add items</Text>
        }
      </ScrollView>
    </SafeAreaView>
  );
};
