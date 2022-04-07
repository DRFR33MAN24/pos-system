import React from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './src/Screens/BottomTabNavigator';
import CartScreen from './src/Screens/CartScreen';
import {Provider} from 'react-redux';
import store from './store';
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
