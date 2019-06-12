CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL, 
    stock_quantity INT, 
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES
    (1, "TV", "Electronics", 500, 20),
    (2, "Camera", "Electronics", 800, 15), 
    (3, "Laptop", "Electronics", 900, 40), 
    (4, "Radio", "Electronics", 80, 23), 
    (5, "Skis", "Sports", 10, 900), 
    (6, "Shoes", "Clothing", 40, 95),
    (7, "Watch", "Electronics", 150, 30),
    (8, "Tent", "Sports", 60, 200),
    (9, "Jacket", "Clothing", 85, 34),
    (10, "Hat", "Clothing", 20, 45);