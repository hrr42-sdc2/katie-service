const faker = require('faker');
const fs = require('fs');
const writer = require('csv-write-stream');
const writeMenus = writer();

// currently generating ~24 million records
const restaurantLimit = 1000000;

const menuTypes = {
  'Breakfast': ['Pancakes & French Toast', 'Entrées', 'Coffee & Tea'],
  'Lunch': ['Appetizers', 'Soups & Salads', 'Burgers & Sandwiches', 'Sides'],
  'Dinner': ['Appetizers', 'Soups & Salads', 'Entrées', 'Specialties', 'Sides'],
  'Desserts': null,
  'Bar': ['Beer', 'Wine', 'Cocktails', 'Spirits'],
  'À La Carte': null,
};

const generateNum = (max, min) =>  Math.floor(Math.random() * (max - min)) + 1;

const writeToFile = (restaurantId, menuType, category) => {
  return writeMenus.write({
    restaurant_id: restaurantId,
    menu_type: menuType,
    category: category,
    item_name: faker.commerce.product(),
    details: faker.commerce.productName(),
    price: faker.finance.amount(1, 80, 2),
  })
};

writeMenus.pipe(fs.createWriteStream('menus.csv'));
let id = 1;

function generateData() {
  let bufferBelowThreshold = true;

  do {
    // generate a number of menus between 1 and 5
    let numOfMenus = generateNum(5, 1);
    let menus = Object.keys(menuTypes).sort(() => Math.random() - 0.5).slice(0, numOfMenus);

    menus.forEach(menu => {
      if(menuTypes[menu] !== null) {
        menuTypes[menu].forEach(category => {
          // generate a number of menu items for each category between 5 and 10
          let numOfItems = generateNum(10, 5);
          for(let j = 0; j < numOfItems; j++) {
            bufferBelowThreshold = writeToFile(id, menu, category);
          }
        })
      }
    });
    id++;

    if(id === restaurantLimit) {
      writeMenus.end();
    }
  } while(id < restaurantLimit && bufferBelowThreshold);

  if(id < restaurantLimit) {
    writeMenus.once('drain', generateData);
  }
};

generateData();
