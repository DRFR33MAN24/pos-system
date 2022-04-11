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
            res.push(itemMod);
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
            res.push(itemMod);
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
