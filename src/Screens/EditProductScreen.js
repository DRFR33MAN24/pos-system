import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
  Icon,
  Menu,
  MenuItem,
  useStyleSheet,
  StyleService,
  Card,
} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';

export const EditProductScreen = () => {
  const imageTemplate = '../img/imageTemplate.png';
  const dispatch = useDispatch();
  //const stock = useSelector(state => state.stock);
  return (
    <Layout>
      <Card>
        <Image source={require(imageTemplate)} resizeMode="contain" />
      </Card>
    </Layout>
  );
};

const styles = StyleService.create({
  ImageComponent: {},
});
