DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called programming_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  
  product_name VARCHAR(100) NULL,
  
  department_name VARCHAR(100) NULL,
  
  price INT NULL,
  
  stock_quantity INT NULL, 
  
  PRIMARY KEY (id)
);


-- Creates new rows
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("car", "toys", 10, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pen", "office", 6, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper", "office", 9, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lotion", "cosmetics", 3, 19);
