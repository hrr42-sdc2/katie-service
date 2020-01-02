const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://127.0.0.1/menu', { useNewUrlParser: true });

module.exports = db;