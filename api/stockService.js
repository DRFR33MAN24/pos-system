import db from './database';

export const getProductByCode = async code => {
  let res;
  db.executeSql(
    `SELECT name,latitude  FROM Offices where name=${code};`,
    [],
    results => {
      // console.log('Query completed', results.rows.length);
      if (result.rows.length !== 0) {
        res = results.rows.item(0);
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
