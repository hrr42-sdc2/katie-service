const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('../database/index.js');

const app = express();
const Port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.post('/menu/:restaurantId', function(req, res) {
  db.addMenuItem(req.body, () => {
    res.sendStatus(201);
  })
});

app.get('/menu/:restaurantId/:menuType', function(req, res) {
  db.fetch(req.params, res.send.bind(res));
});

app.put('/menu/:restaurantId', function(req, res) {
  db.updateMenu(req.body, () =>{
    res.sendStatus(200);
  })
});

// deletes a given item on a menu
app.delete('/menu/:restaurantId/:itemId', function(req, res) {
  db.deleteItem(req.params, () =>{
    res.sendStatus(200);
  })
});

// deletes a given menu
app.delete('/menu/:restaurantId/:menuType', function(req, res) {
  db.deleteMenu(req.params, () =>{
    res.sendStatus(200);
  })
});

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
