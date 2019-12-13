const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const MenuList = require('../database/index.js');

const app = express();
const Port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.get('/api/dinner', function(req, res) {
  res.status(200);
  MenuList.fetch("dinner", res.send.bind(res));
});
app.get('/api/wine', function(req, res) {
  res.status(200);
  MenuList.fetch("wine", res.send.bind(res));
});

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});