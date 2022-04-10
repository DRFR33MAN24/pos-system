import db from './database';

export const getProductByCode = async code => {
  return new Promise((resolve, reject) => {
    let res = [];
    db.executeSql(
      `SELECT *  FROM Stock where barcode=${code}`,
      [],
      results => {

        if (results.length !== 0) {
          // Create Products array that is consumable by target
          results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
              res.push(result.rows.item(index))
            }
          });
          resolve(res);
        } else {

          reject(null)
        }
      },
      err => reject(err),
    );

  })



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

            res.push(results.rows.item(index))
          }

          resolve(res);
        } else {

          reject(null)
        }
      },
      err =>

        reject(err)
      ,
    );

  })



};
