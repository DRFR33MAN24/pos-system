import React from 'react';
import { ScrollView } from 'react-native';
import {
  Input,
  Button,
  Icon,
  Layout,
  Modal,
  Card,
  Text,
  Menu,
  MenuItem
} from '@ui-kitten/components';

import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, searchItemByName } from '../Reducers/cartSlice';
function SearchBar(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const [value, setValue] = React.useState('');
  console.log("SearchBar", cart.searchItems);
  return (
    <Layout style={{}}>
      <Input
        style={{}}
        placeholder="Place your Text"
        value={value}
        onChangeText={nextValue => {
          setValue(nextValue);

          dispatch(searchItemByName(nextValue));
        }}
      />
      {cart.searchItems.length !== 0 ? (

        <Menu
          // selectedIndex={selectedIndex}
          onSelect={index => {
            dispatch(addCartItem(cart.searchItems[index]))
          }}>
          {cart.searchItems.map(item => (

            <MenuItem
              title={item.name}
              key={item.id}

            />

          ))}
        </Menu>

      ) : (
        <Text>No Items Found!</Text>
      )}
    </Layout>
  );
}

export default SearchBar;
