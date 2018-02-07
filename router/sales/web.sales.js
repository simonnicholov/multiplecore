
// init dependencies
var express = require('express');
var sql = require('mssql');
var router = express.Router();

// call core functions
var core = require('../../core.js');

// call sql connection configuration
var config = require('../../config.js').setup();

console.log(config);

// ================================================================== ROUTER ================================================================== //

router.get('/loadsales', function(req, res) {
    //execute query
    core.ExecuteQueryWithoutParameter(req, res, 'usp_Test', config);
});

// -----------------------------------------------------------------------------

router.get('/loadsales2', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // define parameter
    core.AddWithParameter(table1, "FormID", "02");   

    //execute query
    core.ExecuteQueryWithParameter(req, res, 'usp_Test1', config, table1);
});

// -----------------------------------------------------------------------------

router.get('/loadsales3', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // define parameter
    core.AddWithParameter(table1, "FormID", "03");

    //execute query
    core.ExecuteQueryWithParameter(req, res, 'usp_Test1', config, table1);
});

// -----------------------------------------------------------------------------

router.post('/submitSales', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // parse json to object
    var obj = JSON.parse(req.body.id);

    // define parameter
    core.AddWithParameter(table1, "FormID", obj.formid);
    core.AddWithParameter(table1, "Name", obj.name);

    //execute query
    core.ExecuteQueryWithParameter(req, res, 'usp_Test2', config, table1);
});

// -----------------------------------------------------------------------------

router.post('/submitSalesMultiple', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // parse json to object
    var obj = JSON.parse(req.body.id);
    var arr1 = obj.array;

    // define table for user defined table (UDT)
    const table2 = new sql.Table();
    core.PrepareUDTParameter(table2, arr1);

    // define parameter
    core.AddWithParameter(table1, "SessionID", obj.sessionid);
    core.AddWithParameter(table1, "tbl_Sales", table2);

    //execute query
    core.ExecuteQueryWithParameterArray(req, res, 'usp_Test3', config, table1, table2);
});

// -----------------------------------------------------------------------------

module.exports = router;