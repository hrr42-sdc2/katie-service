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
  return MenuList.create(menuItem)
  .then((item) => {
    return item;
  })
  .catch(err => {
    return err;
  })
};

let fetch = (menuInfo) => {
  return MenuList
  .find({restaurant_id: menuInfo.restaurantId, menuType: menuInfo.menuType})
  .then((menu) => {
    return menu;
  })
  .catch(err => {
    return err;
  })
};

let updateMenu = (data) => {
  return MenuList.update(data[0], data[1])
  .then((menu) => {
    return menu;
  })
  .catch(err => {
    return err;
  })
};

let deleteItem = (item) => {
  return MenuList.findOneAndDelete({
    item: item
  })
  .then((menu) => {
    return menu;
  })
  .catch(err => {
    return err;
  })
};

let deleteMenu = (menu, cb) => {
  return MenuList.deleteMany({
    restaurantId: menu.restaurantId,
    menuType: menu.menuType
  })
  .then((menu) => {
    return menu;
  })
  .catch(err => {
    return err;
  })
};

module.exports = {
  MenuList,
  addMenuItem,
  fetch,
  updateMenu,
  deleteMenu,
  deleteItem
};


