import React from 'react';
import {
  Layout,
  Button,
  Text,
  Input,
  useTheme,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components';
import {Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

const Product = props => {
  const dispatch = useDispatch();
  //   const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  //console.log('CartItem', props.productInfo);
  const defaultImg = '../img/milk.png';

  return (
    <>
      <Layout style={styles.container}>
        <Text>Product</Text>
      </Layout>
    </>
  );
};

const themedStyles = StyleService.create({
  container: {},
});

export default Product;
