const MenuList = require('./index.js');
const db = require('./menu.js');

const sampleMenu = [
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Signature Fried Asparagus",
    description: "Topped with jumbo lump crabmeat",
    price: 19.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Famous Pork Chop 'Bites'",
    description: null,
    price: 13.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Cherry Pepper Calamari'",
    description: null,
    price: 17.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Seafood Stuffed Mushrooms'",
    description: null,
    price: 12.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Beef & Bleu *",
    description: null,
    price: 14.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Crab Cakes",
    description: null,
    price: 19.50
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Prime Ribeye* 14 Oz.",
    description: null,
    price: 50.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Prime New York Strip* 14 Oz.",
    description: null,
    price: 50.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Filet Mignon* 6 Oz.",
    description: null,
    price: 41.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Filet Mignon* 8 Oz.",
    description: null,
    price: 45.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Bone-In Filet Mignon* 14 Oz.",
    description: null,
    price: 62.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Double-Cut Lamb Chops* 14 Oz.",
    description: null,
    price: 48.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Prime Bone-In Cowboy Ribeye* 22 Oz.",
    description: null,
    price: 57.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Tomahawk Ribeye* 32 Oz.",
    description: null,
    price: 99.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Seafood",
    item: "Chargrilled Salmon*",
    description: "Served with lemon dill butter and cauliflower mousse",
    price: 38.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Seafood",
    item: "Fried Shrimp",
    description: "Served with your choice of french fries or sweet potato fries",
    price: 32.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Jeio Bisol Prosecco, Veneto, Italy - Glass",
    description: null,
    price: 12.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Jeio Bisol Prosecco, Veneto, Italy - Bottle",
    description: null,
    price: 48.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Domaine Chandon Brut, California - Glass",
    description: null,
    price: 16.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Domaine Chandon Brut, California - Bottle",
    description: null,
    price: 64.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Marques de Caceres Dry Rosé, Rioja, Spain - Glass",
    description: null,
    price: 8.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Marques de Caceres Dry Rosé, Rioja, Spain - Bottle",
    description: null,
    price: 32.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "MV Castello del Poggio Moscato, Italy - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "MV Castello del Poggio Moscato, Italy - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Hess 'Shirtail Ranches' Chardonnay, California - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Hess 'Shirtail Ranches' Chardonnay, California - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2016 Perrin Reserve Cotes du Rhone, Southern Rhone, France - Glass",
    description: null,
    price: 9.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2016 Perrin Reserve Cotes du Rhone, Southern Rhone, France - Bottle",
    description: null,
    price: 36.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 J. Lohr Pinot Noir, Monterey - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 J. Lohr Pinot Noir, Monterey - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 Cartlidge & Browne Cabernet, California - Glass",
    description: null,
    price: 11.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 Cartlidge & Browne Cabernet, California - Bottle",
    description: null,
    price: 44.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 TintoNegro Malbec, Uco Valley, Mendoza - Glass",
    description: null,
    price: 11.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 TintoNegro Malbec, Uco Valley, Mendoza - Bottle",
    description: null,
    price: 44.00
  }
];

const insertSampleMenu = function() {
  MenuList.MenuList.create(sampleMenu)
};

insertSampleMenu();
