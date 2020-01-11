const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  database: 'menusdb',
  min: 2,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis:  3000
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

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
const insertQuery = {
  name: 'insert-item',
  text: `INSERT INTO menus VALUES ($1,$2,$3,$4,$5,$6,%7)`
};

const menuQuery = {
  name: 'fetch-menu',
  text: 'SELECT * FROM menus WHERE restaurant_id = $1'
};

const itemsQuery = {
  name: 'fetch-menu-type',
  text: 'SELECT * FROM menus WHERE restaurant_id = $1 AND menu_type = $2'
};

const deleteMenuQuery = {
  name: 'delete-menu',
  text: 'DELETE FROM menus WHERE restaurant_id = $1 AND menu_type = $2'
}

const deleteItemQuery = {
  name: 'delete-item',
  text: 'DELETE FROM menus WHERE restaurant_id = $1 AND item_id = $2'
}

const addMenuItem = (data) => {
  insertQuery.values = data;
  return pool.connect()
  .then(client => {
    return client.query(insertQuery)
    .then(res => {
      client.release()
      return res;
    })
    .catch(err => {
      client.release();
      return err;
    })
  })
};

const getMenus = (info) => {
  menuQuery.values = [info.restaurantId];
  return pool.connect()
  .then(client => {
    return client.query(menuQuery)
    .then(res => {
      client.release()
      return res;
    })
  })
  .catch(err => {
    client.release();
    return err;
  });
};

const getMenuItems = (info) => {
  itemsQuery.values = [info.restaurantId, info.menuType];
  return pool.connect()
  .then(client => {
    return client.query(itemsQuery)
    .then(res => {
      client.release()
      return res;
    })
  })
  .catch(err => {
    client.release();
    return err;
  });
};

const deleteMenu = (info) => {
  deleteMenuQuery.values = [info.restaurantId, info.menuType];
  pool.connect()
  then(client => {
    return client.query(deleteMenuQuery)
    .then(res => {
      client.release()
      return res;
    })
  })
  .catch(err => {
    client.release();
    return err;
  });
};

const deleteItem = (info) => {
  deleteItemQuery.values = [info.restaurantId, info.itemId];
  pool.connect()
  then(client => {
    return client.query(deleteItemQuery)
    .then(res => {
      client.release()
      return res;
    })
  })
  .catch(err => {
    client.release();
    return err;
  });
};

module.exports = {addMenuItem, getMenus, getMenuItems, deleteMenu, deleteItem};
