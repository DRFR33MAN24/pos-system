import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

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
} from '@ui-kitten/components';

const StarIcon = props => <Icon {...props} name="star" />;

const ForwardIcon = props => <Icon {...props} name="arrow-ios-forward" />;

export const SettingsScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const styles = useStyleSheet(themedStyles);
  const navigateStock = () => {
    navigation.navigate('Stock');
  };

  return (
    <Layout style={styles.container}>
      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => {
          setSelectedIndex(index);
          navigateStock();
        }}>
        <MenuItem
          title="Products"
          accessoryLeft={StarIcon}
          // accessoryRight={ForwardIcon}
        />
        <MenuItem
          title="Orders"
          disabled={true}
          accessoryLeft={StarIcon}
          // accessoryRight={ForwardIcon}
        />
        <MenuItem
          title="Transactions"
          accessoryLeft={StarIcon}
          // accessoryRight={ForwardIcon}
        />
      </Menu>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {},
});
