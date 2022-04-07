import React from 'react';
import {Layout, Button, Text} from '@ui-kitten/components';
import {Image, StyleSheet} from 'react-native';

const CartItem = props => {
  const defaultImg = '../img/milk.png';
  return (
    <>
      <Layout style={styles.container}>
        <Image style={styles.productImg} source={require(defaultImg)} />
        <Text style={styles.productInfo}>Product Name</Text>
        <Layout style={styles.qtyButtons}>
          <Button appearance="ghost">
            {evaProps => (
              <Text {...evaProps} style={styles.qtyButton}>
                +
              </Text>
            )}
          </Button>
          <Button appearance="ghost">
            {evaProps => (
              <Text {...evaProps} style={styles.qtyButton}>
                -
              </Text>
            )}
          </Button>
        </Layout>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 4,
  },
  qtyButtons: {
    backgroundColor: 'black',
    flexDirection: 'column',
    flex: 1,
  },
  qtyButton: {
    fontSize: 40,
    color: '#fff',
  },
  productImg: {
    width: 64,
    height: 64,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  productInfo: {
    flex: 1,
  },
});

export default CartItem;
