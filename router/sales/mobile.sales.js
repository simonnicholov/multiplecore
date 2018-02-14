
// init dependencies
var express = require('express');
var sql = require('mssql');
var router = express.Router();

// call core functions
var core = require('../../multiple.core.js');

// call sql connection configuration
var config = require('../../multiple.config.js');
console.log(config.setup());
console.log(config.application() + ' [mobile.sales.js]');


// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------ NOTES ----------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //

/*
    When you are using SQL Server 2014 and you've output parameter. ExpressJS doesn't care about output parameter, so it will be treated as input parameter.
    Please remember, ExpressJS can't return output parameter as a table. So, the behavior between ExpressJS and WebService in C# doesn't have similarity.
    If you need an output as a table, you have to select manually at the end of your store procedure.
*/


// ================================================================== GET ROUTER ================================================================== //

router.get('/getsingletable', function(req, res) {
    //execute query
    return core.ExecuteQueryWithoutParameter2(req, res, 'sample_singletable', config);
});

// -----------------------------------------------------------------------------

router.get('/getdoubletable', function(req, res) {
    //execute query
    return core.ExecuteQueryWithoutParameter2(req, res, 'sample_doubletable', config);
});

// -----------------------------------------------------------------------------

router.post('/submitsales', function(req, res) {
    // define and prepare table parameter
    const table1 = new sql.Table();
    core.PrepareTableParameter(table1);

    // define parameter input
    core.AddWithParameter(table1, "json", req.body.id);   

    //execute query
    return core.ExecuteQueryWithParameter(req, res, 'save_json', config, table1);
});

// -----------------------------------------------------------------------------

module.exports = router;