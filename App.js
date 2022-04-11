import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './src/Screens/Navigators';

import {Provider} from 'react-redux';
import store from './src/store';
import {migrateTable, resetTable} from './api/stockService';
const App = () => {
  useEffect(async () => {
    resetTable();
    migrateTable();
  }, []);
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
