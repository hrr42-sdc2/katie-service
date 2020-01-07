const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  database: 'menusdb'
});

// pool.connect()
//   .then(client => {
//     let writeStream = client.query(copyFrom("COPY menus FROM STDIN DELIMITER ',' CSV HEADER"));
//     let readStream = fs.createReadStream('menus.csv');

//     readStream.on('error', error => console.log(error));
//     writeStream.on('error', error => console.log(error));

//     writeStream.on('end', () => {
//       client.query("SELECT COUNT(*) FROM menus")
//       .then(results => {
//         console.log('Rows inserted: ' + results.rows[0].count);
//         client.query("CREATE INDEX id_index ON menus (restaurant_id)")
//           .then(client => client.release())
//           .catch(err => {
//             console.log(err.stack);
//             client.release();
//           });
//       })
//       .catch(err => {
//         console.log(err.stack);
//         client.release();
//       })
//     })
//     readStream.pipe(writeStream);
//   })
//   .catch(err => {
//     pool.end();
//     console.log(err);
//   });

const menuQuery = {
  name: 'fetch-menu',
  text: 'SELECT * FROM menus WHERE restaurant_id = $1'
};

const itemsQuery = {
  name: 'fetch-menu',
  text: 'SELECT * FROM menus WHERE restaurant_id = $1 AND menu_type = $2'
};

const getMenus = (info) => {
  menuQuery.values = [info.restaurantId];
  pool.connect();
  return pool.query(menuQuery);
}

const getMenuItems = (info) => {
  itemsQuery.values = [info.restaurantId, info.menuType];
  pool.connect();
  return pool.query(itemsQuery);
}

module.exports = {getMenus, getMenuItems};
