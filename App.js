import React, {useEffect, useState} from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './src/Screens/Navigators';

import {Provider} from 'react-redux';
import store from './src/store';
import {migrateTable, resetTable} from './api/stockService';
import SplashScreen from './src/Screens/SplashScreen';
const App = () => {
  const [appReady, setAppReady] = useState(false);
  useEffect(async () => {
    resetTable();
    migrateTable();
    setTimeout(() => {
      setAppReady(true);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {appReady ? <AppNavigator /> : <SplashScreen />}
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
