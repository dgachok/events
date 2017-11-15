// modules =================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const logger = require('morgan');
const errorHandler = require('errorhandler');

// configuration ===========================================

// config files
const db = require('./config/db');

// set our port
const port = process.env.PORT || 5050;

const controllers = require('./app/controllers/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(methodOverride());

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// connect to our mongoDB database
mongoose.connect(db.url, { useMongoClient: true });

// controllers ==================================================
app.use(controllers);

if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// start app at http://localhost:8080
app.listen(port);

// expose app
exports = module.exports = app;