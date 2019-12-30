// {
//     restaurant_id: 100,
//     menuType: "wine",
//     category: "White Wines & Rosé",
//     item: "2017 Marques de Caceres Dry Rosé, Rioja, Spain - Glass",
//     description: null,
//     price: 8.00
// },

function generateData() {
  let restaurantLimit = 10;
  let menuTypes = ['Breakfast', 'Lunch', 'Dinner', 'Appetizers', 'Desserts', 'Wine', 'Cocktails', 'Drinks', 'Salads', 'Entrées', 'À La Carte']

  for(let i = 1; i < restaurantLimit + 1; i++) {
    let numOfMenus = Math.floor(Math.random() * 5) + 1;
    //console.log(numOfMenus);
    let menus = menuTypes.sort(() => Math.random() - 0.5).slice(0, numOfMenus)
    console.log(menus)
  }
}

generateData();