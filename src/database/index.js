const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });

const menuSchema = new mongoose.Schema({
  restaurant_id: Number,
  menuType: String,
  category: String,
  item: String,
  description: String,
  price: Number
});

const MenuList = mongoose.model('MenuList', menuSchema);

let fetch = (menuOrder, cb) => {
  MenuList
  .find({restaurant_id: 000, menuType: menuOrder})
  .exec((err, menu) => {
    if (err) {
      console.log("Cannot get menu" + menuOrder)
    };
    console.log(menu);
    cb(menu); //res.send(menu);
  });
}

module.exports = MenuList;
module.exports.fetch = fetch;


