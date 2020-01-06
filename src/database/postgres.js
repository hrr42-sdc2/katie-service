const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  database: 'menusdb'
});

pool.query(`CREATE TABLE IF NOT EXISTS menus (
  restaurant_id int,
  menu_type varchar(50),
  category varchar(50),
  item_id int,
  item_name varchar(50),
  details varchar(250),
  price decimal(12,2)
);`)
  .then(res => {
    console.log('created');
  })
  .catch(err => {
    console.log(err.stack);
  });

pool.connect()
  .then(client => {
    let writeStream = client.query(copyFrom("COPY menus FROM STDIN DELIMITER ',' CSV HEADER"));
    let readStream = fs.createReadStream('menus.csv');

    readStream.on('error', error => console.log(error));
    writeStream.on('error', error => console.log(error));

    writeStream.on('end', () => {
      client.query("SELECT COUNT(*) FROM menus")
      .then(results => {
        console.log('Rows inserted: ' + results.rows[0].count);
        client.query("CREATE INDEX id_index ON menus (restaurant_id)")
          .then(client => client.release())
          .catch(err => {
            console.log(err.stack);
            client.release();
          });
      })
      .catch(err => {
        console.log(err.stack);
        client.release();
      })
    })
    readStream.pipe(writeStream);
  })
  .catch(err => {
    pool.end();
    console.log(err);
  });

