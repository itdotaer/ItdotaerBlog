var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//View Related Routes
var routes = require('./routes/index');
//Api Related Routes
var api = require('./routes/api/index');

//Express App
var app = express();

//Middlewares
var errorHandler = require('./middlewares/errorHandler');

//Is Dev Environment?
var isDevEnv = app.get('env') === 'development';

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// If use favicon
//app.use(favicon(__dirname + '/public/favicon.ico'));

//If Dev, Enable logger
if(isDevEnv){
    app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', routes);

//Not Found
app.use(errorHandler.notFound);

//Dev Error
if (isDevEnv) {
    app.use(errorHandler.serverDevError);
}

//Prod Error
app.use(errorHandler.serverError);

module.exports = app;
