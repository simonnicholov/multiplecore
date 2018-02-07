

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- DEFINE CONNECTION STRING  --------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// set up production connection
var currentProduction = { user: 'sa', password: 'xxx', server: "xxx", database: 'xxx' };

// set up development connection
var currentDevelopment = { user: 'sa', password: 'xxx', server: "xxx\\SQLEXPRESS", database: 'xxx' };
// var currentDevelopment = { user: 'sa', password: 'xxx', server: "xxx\\SQLEXPRESS", database: 'CoreDB' };

// set up localhost connection
var currentLocalhost = { user: 'sa', password: 'xxx', server: "xxx\\SQLEXPRESS", database: 'xxx' };


// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------- EXPORT FUNCTIONS ------------------------------------------------------------ //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

module.exports = {
    application: function(){
        return "[ApplicationName]"; // write your application name
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