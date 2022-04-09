import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(false);

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

//     db.executeSql(
//       `SELECT *  FROM Offices`,
//       [],
//       results => {
//         console.log('Query completed', results.rows.length);

//         // Get rows with Web SQL Database spec compliance.

//         var len = results.rows.length;
//         for (let i = 0; i < len; i++) {
//           let row = results.rows.item(i);
//           console.log(`Office name: ${row.name}`);
//         }

//         // Alternatively, you can use the non-standard raw method.

//         /*
//         let rows = results.rows.raw(); // shallow copy of rows Array

//         rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
//       */
//       },
//       err => console.log('Database Creation error!', err),
//     );

export default db;
