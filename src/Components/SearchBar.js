import React from 'react';
import {ScrollView} from 'react-native';
import {
  Input,
  Button,
  Icon,
  Layout,
  Modal,
  Card,
  Text,
} from '@ui-kitten/components';

import {useSelector, useDispatch} from 'react-redux';
import {searchItemByCode} from '../Reducers/cartSlice';
function SearchBar(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const [value, setValue] = React.useState('');

  return (
    <Layout style={{}}>
      <Input
        style={{}}
        placeholder="Place your Text"
        value={value}
        onChangeText={nextValue => {
          setValue(nextValue);

          dispatch(searchItemByCode(nextValue));
        }}
      />
      {cart.searchItems.length !== 0 ? (
        <ScrollView>
          {cart.searchItems.map(item => (
            <Text key={item.name}>{item.name}</Text>
          ))}
        </ScrollView>
      ) : (
        <Text>No Items Found!</Text>
      )}
    </Layout>
  );
}

export default SearchBar;
