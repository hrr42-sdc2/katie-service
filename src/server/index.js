const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const MenuList = require('../database/index.js');

const app = express();
const Port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.get('/api/:menuType', function(req, res) {
  res.status(200);
  MenuList.fetch(req.params.menuType, res.send.bind(res));
});

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
