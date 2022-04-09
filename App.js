import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './src/Screens/BottomTabNavigator';

import {Provider} from 'react-redux';
import store from './src/store';
import db from './api/sqliteTest';
const App = () => {
  useEffect(async () => {
    db.executeSql(
      'CREATE TABLE IF NOT EXISTS Version( ' +
        'version_id INTEGER PRIMARY KEY NOT NULL); ',
      [],
      () => console.log('Database created successfully'),
      err => console.log('Database Creation error!', err),
    );

    db.executeSql(
      'CREATE TABLE IF NOT EXISTS Version( ' +
        'version_id INTEGER PRIMARY KEY NOT NULL); ',
      [],
      () => console.log('Database created successfully'),
      err => console.log('Database Creation error!', err),
    );

    db.executeSql(
      'CREATE TABLE IF NOT EXISTS Offices( ' +
        'office_id INTEGER PRIMARY KEY NOT NULL, ' +
        'name VARCHAR(20), ' +
        'longtitude FLOAT, ' +
        'latitude FLOAT ) ; ',
      [],
      () => console.log('Table created successfully'),
      err => console.log('Table Creation error!', err),
    );

    db.executeSql(
      'INSERT INTO Offices (name, longtitude, latitude) VALUES ("Denver", 59.8,  34.);',
      [],
      () => console.log('Data inserted successfully'),
      err => console.log('Data insertion error!', err),
    );

    db.executeSql(
      `SELECT *  FROM Offices`,
      [],
      results => {
        console.log('Query completed', results.rows.length);

        // Get rows with Web SQL Database spec compliance.

        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log(`Office name: ${row.name}`);
        }

        // Alternatively, you can use the non-standard raw method.

        /*
        let rows = results.rows.raw(); // shallow copy of rows Array

        rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
      */
      },
      err => console.log('Database Creation error!', err),
    );
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
