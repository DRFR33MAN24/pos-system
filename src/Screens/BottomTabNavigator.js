import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Icon,
  Layout,
} from '@ui-kitten/components';
import {CartScreen} from './CartScreen';
import {SettingsScreen} from './SettingsScreen';
import {StyleSheet} from 'react-native';
const {Navigator, Screen} = createBottomTabNavigator();

export const CameraIcon = () => (
  <Icon style={styles.icon} fill="#8F9BB3" name="camera" />
);
export const SearchIcon = () => (
  <Icon style={styles.icon} fill="#8F9BB3" name="search" />
);
function LogoTitle() {
  return (
    <Layout style={styles.container}>
      <Button appearance="ghost">
        <CameraIcon />
      </Button>
      <Button appearance="ghost">
        <SearchIcon />
      </Button>
    </Layout>
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

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="Cart"
      options={{headerTitle: props => <LogoTitle {...props} />}}
      component={CartScreen}
    />
    <Screen name="Settings" component={SettingsScreen} />
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
