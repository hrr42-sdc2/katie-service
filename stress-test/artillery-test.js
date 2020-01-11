const faker = require('faker');

const getRestaurantMenus = (context, events, next) => {
  context.vars.id = Math.floor(Math.random() * 10000000) + 9000000;
  return next();
}

const menuTypes = {
  'Breakfast': ['Pancakes & French Toast', 'Entrées', 'Coffee & Tea'],
  'Lunch': ['Appetizers', 'Soups & Salads', 'Burgers & Sandwiches', 'Sides'],
  'Dinner': ['Appetizers', 'Soups & Salads', 'Entrées', 'Specialties', 'Sides'],
  'Desserts': null,
  'Bar': ['Beer', 'Wine', 'Cocktails', 'Spirits'],
  'À La Carte': null,
};

const addItem = (context, events, next) => {
  let id = 90000000;
  let key = Object.keys(menuTypes)[Math.floor(Object.keys(menuTypes).length * Math.random())];

  let newItem = {
    restaurant_id: id,
    menu_type: menuTypes[key],
    category: menuTypes[key] || null,
    item_name: faker.commerce.product(),
    details: faker.commerce.productName(),
    price: faker.finance.amount(1, 80, 2),
  };

  context.vars.id = id;
  context.vars.item = newItem;
};

module.exports = { getRestaurantMenus: getRestaurantMenus };
//console.log(Math.floor(Math.random() * (10000000 - 9000000) + 9000000));