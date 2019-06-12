var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
    };
        // throw err;
    // insert run/search function();
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
    })
};
