# CRUD API

### Create / POST
**/menu/:restaurantId**<br>
Creates a new menu item for a given restaurant and adds to the database.

### Read / GET
**/menu/:restaurantId/:menuType**<br>
Responds with all menu items for a given restaurant and menu type.

### Update / PUT
**/menu/:restaurantId**<br>
Updates a given database entry with the updates provided in the request body.

### Delete / DELETE
**/menu/:restaurantId/:itemId**<br>
Deletes a given item on a menu.

**/menu/:restaurantId/:menuType**<br>
Deletes a given menu.
