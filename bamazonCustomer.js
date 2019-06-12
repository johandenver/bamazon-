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
    showItems();
});

function showItems() {
    connection.query("SELECT * FROM products", function(err, data){
        if (err) throw err;
        console.table(data);
        askCustomer(data);
    })
};

function askCustomer(data){
    inquirer
        .prompt([
            {
                type: "input",
                name: "item",
                message: "Please enter the ID of the item you want to buy.",
                validate: function(value) {
                    if (isNaN(value) === false) {
                    return true;
                    }
                    return false;
                }
            },
            {
                type: "input",
                name: "amount",
                message: "How many would you like?",
                validate: function(value) {
                   return value > 0; 
                  }
            }
        ])
        .then(function(value){
            var itemId = parseInt(value.item);
            var amount = parseInt(value.amount);
            var item = checkInventory(data, itemId, amount);

            if((item)||(amount >= data[i].stock_quantity)){
                makePurchase(itemId, amount);

            }else{
                console.log("\nWe don't have that item in stock, please choose something else.");
            showItems();
            }
        });
};

function checkInventory(data, itemId, amount){
    for (let i = 0; i < data.length; i++) {
        var stock = data[i].stock_quantity;
        if((data[i].item_id === itemId)||(stock >= amount)){
            return data[i];
        } 
    }
        return null;
};

function makePurchase(itemID, amount){
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [amount, itemID],
        function(err, res) {
            console.log("\nItem purchased! Thank you very much!");
            showItems();
        }
    );
};

