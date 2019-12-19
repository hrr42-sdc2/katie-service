# CRUD API

### Create / POST
'/menu/:restaurantId'
Creates a new menu item for a given restaurant and adds to the database.

### Read / GET
'/menu/:restaurantId/:menuType'
Responds with all menu items for a given restaurant and menu type.

### Update / PUT
'/menu/:restaurantId'
Updates a given database entry with the updates provided in the request body.

### Delete / DELETE
'/menu/:restaurantId/:itemId'
Deletes a given item on a menu.

'/menu/:restaurantId/:menuType'
Deletes a given menu.