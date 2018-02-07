

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- DEFINE CONNECTION STRING  --------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// set up production connection
var currentProduction = { user: 'sa', password: '5!Mon231', server: "10.10.0.150", database: 'CoreDB' };
var logProduction = { user: 'sa', password: '5!Mon231', server: "10.10.0.150", database: 'LogDB' };

// set up development connection
var currentDevelopment = { user: 'sa', password: '123456Bb', server: "10.1.0.17\\SQLEXPRESS", database: 'CoreDB' };
var logDevelopment = { user: 'sa', password: '123456Bb', server: "10.1.0.17\\SQLEXPRESS", database: 'LogDB' };

// var currentDevelopment = { user: 'sa', password: '5!Mon231', server: "10.1.0.67\\SQLEXPRESS", database: 'CoreDB' };
// var logDevelopment = { user: 'sa', password: '5!Mon231', server: "10.1.0.67\\SQLEXPRESS", database: 'LogDB' };

// set up localhost connection
var currentLocalhost = { user: 'sa', password: '5!Mon231', server: "ASR-L0103\\SQLEXPRESS", database: 'CoreDB' };
var logLocalhost = { user: 'sa', password: '5!Mon231', server: "ASR-L0103\\SQLEXPRESS", database: 'LogDB' };



// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------- EXPORT FUNCTIONS ------------------------------------------------------------ //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

module.exports = {
    application: function(){
        return "Sales";
    },
    setup: function(){
        var array = [];
        
        if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'production') { 
            array.push(currentProduction);
            array.push(logProduction);
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'development') { 
            array.push(currentDevelopment);
            array.push(logDevelopment);
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'localhost')  { 
            array.push(currentLocalhost);
            array.push(logLocalhost);
        }

        return array;
    }
}

//exports.configbrowser = configBrowser;
//exports.configmobile = configMobile;