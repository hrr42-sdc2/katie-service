const MenuList = require('./index.js');

const sampleMenu = [
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Signature Fried Asparagus",
    description: "Topped with jumbo lump crabmeat",
    price: 19.00
  },
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Famous Pork Chop 'Bites'",
    description: null,
    price: 13.00
  },
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Cherry Pepper Calamari'",
    description: null,
    price: 17.00
  },
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Seafood Stuffed Mushrooms'",
    description: null,
    price: 12.00
  },
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Beef & Bleu *",
    description: null,
    price: 14.00
  },
  {
    restaurant_id: 000,
    menuType: "dinner",
    category: "Starters",
    item: "Crab Cakes",
    description: null,
    price: 19.50
  }
];

const insertSampleMenu = function() {
  MenuList.create(sampleMenu)
};

insertSampleMenu();