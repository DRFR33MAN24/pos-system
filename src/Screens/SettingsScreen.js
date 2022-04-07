import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView} from 'react-native';
export const SettingsScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>SettingsScreen</Text>
      </Layout>
    </SafeAreaView>
  );
};
