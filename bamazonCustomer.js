var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "7500Frontage",
  database: "bamazon_db"
});


// // validateInput makes sure that the user is supplying only positive integers for their inputs
// function validateInput(value) {
// 	var integer = Number.isInteger(parseFloat(value));
// 	var sign = Math.sign(value);

// 	if (integer && (sign === 1)) {
// 		return true;
// 	} else {
// 		return 'Please enter a whole non-zero number.';
// 	}
// }

var checkAndBuy2 = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        //CREATES A NEW TABLE IN THE COOL CLI VIEW 
        var table = new Table({
            head: ['if', 'product_name', 'department', 'price', 'stock_quantity']
        }); 
