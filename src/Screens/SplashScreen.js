import React from 'react';

import {ImageBackground, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
const SplashScreen = props => {
  const splash = '../img/splash.jpg';

  return (
    <ImageBackground
      source={require(splash)}
      style={{width: '100%', height: '100%'}}>
      <Text>POS</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SplashScreen;
