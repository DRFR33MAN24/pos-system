import db from './database';

export const getProductByCode = async code => {
  return new Promise((resolve, reject) => {

    db.executeSql(
      `SELECT *  FROM Stock where name=${code}`,
      [],
      result => {

        if (result.rows.length !== 0) {
          // Create Products array that is consumable by target
          resolve(result.rows.item(0));
        } else {

          reject(null)
        }
      },
      err => reject(err),
    );

  })



};
