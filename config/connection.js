const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "jT3037266954!",
    database: "burgerDB"
});

connection.connect(function(err){
    if (err){
        console.error("Error! Could not connect: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;