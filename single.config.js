

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- DEFINE CONNECTION STRING  --------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// set up production connection
var currentProduction = { user: 'sa', password: '5!Mon231', server: "10.10.0.150", database: 'CoreDB' };

// set up development connection
var currentDevelopment = { user: 'sa', password: '123456Bb', server: "10.1.0.17\\SQLEXPRESS", database: 'CoreDB' };
// var currentDevelopment = { user: 'sa', password: '5!Mon231', server: "10.1.0.67\\SQLEXPRESS", database: 'CoreDB' };

// set up localhost connection
var currentLocalhost = { user: 'sa', password: '5!Mon231', server: "ASR-L0103\\SQLEXPRESS", database: 'CoreDB' };


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
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'development') { 
            array.push(currentDevelopment);
        } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'localhost')  { 
            array.push(currentLocalhost);
        }

        return array;
    }
}

//exports.configbrowser = configBrowser;
//exports.configmobile = configMobile;