import db from './database';

export const getProductByCode = async code => {
  return new Promise((resolve, reject) => {
    db.executeSql(
      `SELECT *  FROM Offices `,
      [],
      result => {
        // console.log('Query completed', results.rows.length);
        if (result.rows.length !== 0) {

          resolve(result.rows.item(0));
        } else {

          reject(null)
        }
      },
      err => console.log('Query Error', err),
    );
  })



};
