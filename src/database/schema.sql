
CREATE TABLE IF NOT EXISTS menus
(
  restaurant_id bigint,
  menu_type varchar(50),
  category varchar(50),
  item_id int,
  item_name varchar(50)
  details varchar(250),
  price decimal(12,2)
);