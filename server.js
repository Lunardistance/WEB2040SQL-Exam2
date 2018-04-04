var port = process.env.PORT || 5000;
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var mongoose = require('mongoose');

var notes = require('./models/notes')(mongoose);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

require('./routes')(app, notes);


app.listen(port, function(err){
    if(err)console.log('error ', err);
    console.log("Server listening on port " + port);
    require('./connection')(mongoose,'localhost','notes');
});
