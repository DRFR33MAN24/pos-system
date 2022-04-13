import React from 'react';
import {SafeAreaView, ScrollView, Image, View} from 'react-native';
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
import * as ImagePicker from 'react-native-image-picker';

export const EditProductScreen = () => {
  const imageTemplate = '../img/imageTemplate.png';
  const barcodeImg = '../img/barcode.png';
  const dispatch = useDispatch();
  //const stock = useSelector(state => state.stock);

  const [checked, setChecked] = React.useState(false);
  const [pickerResponse, setPickerResponse] = useState(null);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <ScrollView>
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
            <Button onPress={onImageLibraryPress}>From Gallery</Button>
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
        <Card>
          <Text style={styles.sectionTitle}>Barcode</Text>

          <Layout style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              style={styles.barcodeImg}
              source={require(barcodeImg)}
              resizeMode="contain"
            />
          </Layout>
          <Layout style={styles.chooseImage}>
            <Button>Save</Button>
            <Button>Scan </Button>
          </Layout>
        </Card>
      </Layout>
    </ScrollView>
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
  barcodeImg: {
    width: 128,
    height: 128,
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
