import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './src/Screens/BottomTabNavigator';

import {Provider} from 'react-redux';
import store from './src/store';
import db from './api/database';
const App = () => {
  useEffect(async () => {}, []);
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
