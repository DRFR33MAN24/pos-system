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

const CartItem = props => {
  //   const theme = useTheme();
  // const styles = useStyleSheet(themedStyles);
  //console.log('CartItem', props.productInfo);
  const defaultImg = '../img/milk.png';
  return (
    <>
      <Layout style={styles.container}>
        <Image style={styles.productImg} source={require(defaultImg)} />
        <Layout
          style={{flexDirection: 'column', flex: 1, backgroundColor: 'yellow'}}>
          <Text style={styles.productInfo}>{props.productInfo.name}</Text>
          <Text style={styles.productInfo}>{props.productInfo.price}</Text>
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
          <Text style={styles.qtyText}>{props.productInfo.qty}</Text>
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
    backgroundColor: 'color-primary-300',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 4,
  },
  qtyButtons: {
    // backgroundColor: 'red',

    flexDirection: 'column',
    flex: 1,
  },
  qtyButton: {
    fontSize: 40,
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    // borderRadius: 50,
  },
  qtyText: {
    fontSize: 30,
    color: '#000',
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
