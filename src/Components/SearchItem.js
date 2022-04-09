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
import {fetchItemByCode} from '../Reducers/cartSlice';
function SearchItem(props) {
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart);

  const [value, setValue] = React.useState('');
  const searchResults = [{name: 'Apple'}, {name: 'Orange'}];

  return (
    <Layout>
      <Input
        placeholder="Place your Text"
        value={value}
        onChangeText={nextValue => {
          setValue(nextValue);
          dispatch(fetchItemByCode(nextValue));
        }}
      />
      {searchResults.length !== 0 ? (
        <ScrollView>
          {searchResults.map(item => (
            <Text key={item.name}>{item.name}</Text>
          ))}
        </ScrollView>
      ) : (
        <Text>No Items Found!</Text>
      )}
    </Layout>
  );
}

export default SearchItem;
