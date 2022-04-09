import db from './database';

export const getProductByCode = async code => {
  let res;
  db.executeSql(
    `SELECT *  FROM Offices `,
    [],
    result => {
      // console.log('Query completed', results.rows.length);
      if (result.rows.length !== 0) {
        res = result.rows.item(0);
      } else {
        res = [];
        console.log('No records');
      }
    },
    err => console.log('Query Error', err),
  );

  return res;
};
export const getProductById = () => {};
