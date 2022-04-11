import db from './database';

export const getProductByCode = async code => {
  return new Promise((resolve, reject) => {
    let res = [];
    db.executeSql(
      `SELECT *  FROM Stock where barcode=?`,
      [code],
      results => {
        if (results.length !== 0) {
          for (let index = 0; index < results.rows.length; index++) {
            const itemMod = Object.assign({}, results.rows.item(index), {
              qty: 1,
            });
            res.push(results.rows.item(index));
          }

          resolve(res);
        } else {
          reject(null);
        }
      },
      err => reject(err),
    );
  });
};

export const getProductByName = async name => {
  return new Promise((resolve, reject) => {
    let res = [];
    db.executeSql(
      `SELECT *  FROM Stock WHERE name= ?`,
      [name],
      results => {
        if (results.rows.length !== 0) {
          for (let index = 0; index < results.rows.length; index++) {
            const itemMod = Object.assign({}, results.rows.item(index), {
              qty: 1,
            });
            res.push(results.rows.item(index));
          }

          resolve(res);
        } else {
          reject(null);
        }
      },
      err => reject(err),
    );
  });
};

export const migrateTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS Stock( ' +
      'id INTEGER PRIMARY KEY NOT NULL, ' +
      'price INTEGER , ' +
      'discount INTEGER , ' +
      'name VARCHAR(20), ' +
      'qty INTEGER, ' +
      'imageUrl VARCHAR(20), ' +
      'barcode VARCHAR(20) ) ; ',
    [],
    () => console.log('Table created successfully'),
    err => console.log('Table Creation error!', err),
  );

  db.executeSql(
    'INSERT INTO Stock (name,price,discount, barcode, qty,imageUrl) VALUES ("Milk",100,25, 8004100164411,7,  "milk.png");',
    [],
    () => console.log('Data inserted successfully'),
    err => console.log('Data insertion error!', err),
  );

  db.executeSql(
    'INSERT INTO Stock (name,price,discount, barcode, qty,imageUrl) VALUES ("Apple",200,10, 9004100164410,5,  "apple.png");',
    [],
    () => console.log('Data inserted successfully'),
    err => console.log('Data insertion error!', err),
  );
};
export const resetTable = () => {
  db.executeSql(
    `drop table Stock`,
    [],
    () => console.log('Table droped successfully'),
    err => console.log('Table drop error!', err),
  );
};
