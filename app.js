
// init dependencies
var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

// --------------------------------------------------------- APPLICATION USE ---------------------------------------------------------- //

//set parser limitation
app.use(bodyparser({ limit: '50mb' }));

// //set parser functions for parsing application/json
app.use(bodyparser.json());

// //set parser functions for parsing application/json
app.use(bodyparser.urlencoded({ extended: true }));

// // set up CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// --------------------------------------------------------------- WEB --------------------------------------------------------------- //

// define all web router
var sales = require('./router/sales/web.sales.js');
//var product = require('./router/product/web.product.js');
//var salesteam = require('./router/salesteam/web.sales-team.js');

// implement all web router
app.use('/sales', sales);
//app.use('/product', product);
//app.use('/sales-team', salesteam);

// --------------------------------------------------------------- MOBILE ------------------------------------------------------------ //

// define all web router
var sales = require('./router/sales/web.sales.js');
//var product = require('./router/product/web.product.js');
//var salesteam = require('./router/salesteam/web.sales-team.js');

// implement all web router
app.use('/sales', sales);
//app.use('/product', product);
//app.use('/sales-team', salesteam);

// --------------------------------------------------------------- PORT ------------------------------------------------------------- //

//set up server listen
app.listen(8081, function() {
    console.log('Server is running on port 8081 ...');
});