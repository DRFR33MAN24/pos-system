import React from 'react';
import {Layout, Button, Text, Input} from '@ui-kitten/components';
import {Image, StyleSheet} from 'react-native';

const CartItem = props => {
  const defaultImg = '../img/milk.png';
  return (
    <>
      <Layout style={styles.container}>
        <Image style={styles.productImg} source={require(defaultImg)} />
        <Layout
          style={{flexDirection: 'column', flex: 1, backgroundColor: 'yellow'}}>
          <Text style={styles.productInfo}>Product Name</Text>
          <Text style={styles.productInfo}>Price</Text>
          <Input style={styles.input} size="small" placeholder="discount" />
        </Layout>
        <Layout style={styles.qtyButtons}>
          <Button appearance="ghost">
            {evaProps => (
              <Text {...evaProps} style={styles.qtyButton}>
                +
              </Text>
            )}
          </Button>
          <Text style={styles.qtyText}>69</Text>
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
    borderRadius: 10,
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
    textAlign: 'center',
  },
  qtyText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  productImg: {
    width: 64,
    height: 64,
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  productInfo: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 8,
  },
});

export default CartItem;
