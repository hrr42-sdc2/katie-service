const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'opentablemenus' });

client.execute(`CREATE TABLE opentablemenus.menus (
  restaurant_id int,
  menu_type text,
  category text,
  item_id int,
  item_name text,
  details text,
  price decimal,
  PRIMARY KEY (restaurant_id, item_id)
)`)
.then(() => console.log('created'));


// client.execute('COPY opentablemenus.menus (restaurant_id, menu_type, category, item_id, item_name, details, price) FROM "menus.csv" WITH HEADER = true')
// .then(results => console.log('inserted'));


//COPY menus (restaurant_id, menu_type, category, item_name, details, price) FROM 'menus.csv' WITH HEADER = true;