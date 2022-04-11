import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
//SQLite.enablePromise(true);

const database_name = 'Test.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;

let db = SQLite.openDatabase(
  database_name,
  database_version,
  database_displayname,
  database_size,
  () => console.log('Database created successfully'),
  err => {
    console.log('Database Creation error!', err);
    return false;
  },
);

export default db;
