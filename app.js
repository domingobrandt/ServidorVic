var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
//app.use(express.static('public'));
app.use(cors());

var connection = require('./connection');
var routes = require('./routes');

connection.inicia();
routes.configurar(app);

var server = app.listen(8000, function() {
    console.log('Listening in the port : ', server.address().port);
})