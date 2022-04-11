import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Product from '../Components/Product';
export const StockScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const stock = useSelector(state => state.stock);
  return (
    <Layout>
      {/* {stock.stockItems.length !== 0 ? (
        <Menu
        // selectedIndex={selectedIndex}
        >
          {stock.stockItems.map(item => (
            <MenuItem title={item.name} key={item.id} />
          ))}
        </Menu>
      ) : (
        <Text>No Items Found!</Text>
      )} */}

      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Layout>
  );
};
