

// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- DEFINE CONNECTION STRING  --------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

// set up production connection
var currentProduction = { user: 'xxx', password: 'xxx', server: "xxx", database: 'xxx' };

// set up development connection
var currentDevelopment = { user: 'xxx', password: 'xxx', server: "xxx\\SQLEXPRESS", database: 'xxx' };

// set up localhost connection
var currentLocalhost = { user: 'xxx', password: 'xxx', server: "xxx\\SQLEXPRESS", database: 'xxx' };


// ----------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------- EXPORT FUNCTIONS ------------------------------------------------------------ //
// ----------------------------------------------------------------------------------------------------------------------------------------- //

module.exports = {
    application: function(){
        return "[ApplicationName]"; // write your application name
    },
    key: function(){
        return "JSON_F52E2B61-18A1-11d1-B105-00805F49916B"; // this is a field name when you are using sql server 2016 or later which JSON as an output
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