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
  Input,
} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';

export const EditProductScreen = () => {
  const imageTemplate = '../img/imageTemplate.png';
  const dispatch = useDispatch();
  //const stock = useSelector(state => state.stock);
  return (
    <Layout>
      <Card>
        <Text>Product Image</Text>
        <Layout style={styles.container}>
          <Image
            style={styles.ImageComponent}
            source={require(imageTemplate)}
            resizeMode="contain"
          />
        </Layout>
        <Layout style={styles.chooseImage}>
          <Button>From Gallery</Button>
          <Button>Camera</Button>
        </Layout>
      </Card>
      <Card>
        <Text>Product Info</Text>
        <Layout>
          <Input />
        </Layout>
      </Card>
    </Layout>
  );
};

const styles = StyleService.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseImage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  ImageComponent: {
    width: 64,
    height: 64,
  },
});
