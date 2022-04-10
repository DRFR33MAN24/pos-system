import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Icon,
  Layout,
  Modal,
  Card,
  Text,
} from '@ui-kitten/components';
import {CartScreen} from './CartScreen';
import {SettingsScreen} from './SettingsScreen';
import {StockScreen} from './StockScreen';
import {StyleSheet} from 'react-native';
//import {BarCodeScanner} from 'expo-barcode-scanner';
import {Camera} from 'expo-camera';
import SearchBar from '../Components/SearchBar';
const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export const CameraIcon = () => (
  <Icon style={styles.icon} fill="#8F9BB3" name="camera" />
);
export const SearchIcon = () => (
  <Icon style={styles.icon} fill="#8F9BB3" name="search" />
);
function LogoTitle() {
  const [visible, setVisible] = useState(false);
  const [searchBarVis, setSearchBarVis] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cameraReset, setCameraReset] = useState(0);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.torch);
  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const handleBarCodeScanned = ({type, data}) => {
  //   setScanned(true);
  //   console.log(data);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  return (
    <>
      <Modal
        style={{flex: 1}}
        visible={searchBarVis}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setSearchBarVis(false)}>
        <Layout style={{width: 400}}>
          <SearchBar />
        </Layout>
        {/* {<Button onPress={() => setScanned(false)}>Scan</Button>} */}
      </Modal>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Layout style={{width: 400, height: 400}}>
          <Camera
            type={type}
            flashMode={flashMode}
            key={cameraReset}
            onBarCodeScanned={(...args) => {
              const data = args[0].data;
              console.log(data);

              setCameraReset(cameraReset + 1);
            }}
            barCodeScannerSettings={{
              barCodeTypes: ['upc_ean', 'upc_e', 'upc_a'],
            }}
            style={{flex: 1}}
          />
        </Layout>
        {/* {<Button onPress={() => setScanned(false)}>Scan</Button>} */}
      </Modal>
      <Layout style={styles.container}>
        <Button appearance="ghost" onPress={() => setVisible(!visible)}>
          <CameraIcon />
        </Button>
        <Button
          appearance="ghost"
          onPress={() => setSearchBarVis(!searchBarVis)}>
          <SearchIcon />
        </Button>
      </Layout>
    </>
  );
}
const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Cart" />
    <BottomNavigationTab title="Settings" />
  </BottomNavigation>
);

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="Stock" component={StockScreen} />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="Cart"
      options={{headerTitle: props => <LogoTitle {...props} />}}
      component={CartScreen}
    />
    <Screen
      name="Settings"
      component={StackNavigator}
      options={{headerShown: false}}
    />
    {/* <Screen name="Settings" component={SettingsScreen} /> */}
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
