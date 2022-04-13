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
  Toggle,
} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';

export const EditProductScreen = () => {
  const imageTemplate = '../img/imageTemplate.png';
  const dispatch = useDispatch();
  //const stock = useSelector(state => state.stock);

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };

  return (
    <Layout>
      <Card>
        <Text style={styles.sectionTitle}>Product Image</Text>
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
        <Text style={styles.sectionTitle}>Product Info</Text>
        <Layout style={styles.toggle}>
          <Toggle checked={checked} onChange={onCheckedChange}>
            {checked ? `Product enabled` : `Product Disabled`}
          </Toggle>
        </Layout>
        <Layout>
          <Text>Name</Text>
          <Input />
        </Layout>
        <Layout>
          <Text>Price</Text>
          <Input />
        </Layout>
        <Layout>
          <Text>Cost Price</Text>
          <Input />
        </Layout>
        <Layout>
          <Text>SKU</Text>
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
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  toggle: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
