const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });

const menuSchema = new mongoose.Schema({
  restaurant_id: {type:Number, unique: true},
  menuType: {type:String, unique: true},
  category: {type:String,unique: true},
  item: {type:String, unique: true},
  description: {type:String, unique: true},
  price: {type:Number, unique: true, dropDups: true}
});

const MenuList = mongoose.model('MenuList', menuSchema);

// MenuList.find({menuType: "wine"}, function(err,doc) {
//   doc.forEach((item,index) =>{
//     item.remove(function(err,doc) {
//       console.log(doc);
//     })
//   });
// });


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


