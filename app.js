var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://55.55.55.5');
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('plz use /api/books or /api/genre');
});

app.listen(3000);
console.log('Running on port 3000...');
