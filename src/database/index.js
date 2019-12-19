const mongoose = require('mongoose');
const db = require('./menu.js');

mongoose.Promise = global.Promise;

const menuSchema = new mongoose.Schema({
  restaurant_id: {type: Number},
  menuType: {type: String},
  category: {type: String},
  item: {type: String},
  description: {type: String},
  price: {type:Number, dropDups: true}
});

const MenuList = mongoose.model('MenuList', menuSchema);

let addMenuItem = (menuItem, cb) => {
  MenuList.create(menuItem, (err, menu) => {
    if (err) throw err;
    cb();
  })
};

let fetch = (menuInfo, cb) => {
  MenuList
  .find({restaurant_id: menuInfo.restaurantId, menuType: menuInfo.menuType})
  .exec((err, menu) => {
    if (err) {
      console.log("Cannot get menu" + menuInfo)
    };
    cb(menu); //res.send(menu);
  });
};

let updateMenu = (query, newData, cb) => {
  MenuList.update(query, newData, (err, doc) => {
    if (err) throw err;
    cb();
  })
};

let deleteItem = (item, cb) => {
  MenuList.remove({
    _id: item.itemId,
  }, (err, menu) => {
    if (err) throw err;
    cb();
  });
};

let deleteMenu = (menu, cb) => {
  MenuList.remove({
    restaurantId: menu.restaurantId,
    menuType: menu.menuType
  }, (err, menu) => {
    if (err) throw err;
    cb();
  });
};

module.exports = {
  MenuList,
  addMenuItem,
  fetch,
  updateMenu,
  deleteMenu,
  deleteItem
};


