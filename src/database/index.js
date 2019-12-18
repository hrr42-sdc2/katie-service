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

// MenuList.find({menuType:'wine'}, function(err,doc) {
//   doc.forEach((item,index) =>{
//     item.remove(function(err,doc) {
//       console.log(doc);
//     })
//   });
// });

let fetch = (menuOrder, cb) => {
  MenuList
  .find({restaurant_id: 100, menuType: menuOrder})
  .exec((err, menu) => {
    if (err) {
      console.log("Cannot get menu" + menuOrder)
    };
    console.log(menu);
    cb(menu); //res.send(menu);
  });
}

module.exports = { MenuList, fetch };


