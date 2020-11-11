//Database config and connection
const mysql = require('mysql');

//Database settings
var databaseOptions = {
    host     : 'localhost',
    database : 'texttospeech',
    user     : 'root',
    password : ''
};

var connection = mysql.createConnection(databaseOptions);

//Connect to database
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
    }
});

module.exports = connection;