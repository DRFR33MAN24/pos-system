import {
  Layout,
  Text,
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
export const CartScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};
