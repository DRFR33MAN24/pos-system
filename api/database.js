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

db.executeSql(
  'CREATE TABLE IF NOT EXISTS Stock( ' +
  'id INTEGER PRIMARY KEY NOT NULL, ' +
  'name VARCHAR(20), ' +
  'qty INTEGER, ' +
  'imageUrl VARCHAR(20), ' +
  'barcode VARCHAR(20) ) ; ',
  [],
  () => console.log('Table created successfully'),
  err => console.log('Table Creation error!', err),
);

db.executeSql(
  'INSERT INTO Stock (name, barcode, qty,imageUrl) VALUES ("Milk", 9004100164410,4,  milk111.png);',
  [],
  () => console.log('Data inserted successfully'),
  err => console.log('Data insertion error!', err),
);



export default db;
