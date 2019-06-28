var connection = require('../config/connection.js')


var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
		  if (err) {
			throw err;
		  }
		  cb(result);
		});
	},

	create: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
	
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
	
		console.log(queryString);
	
		connection.query(queryString, vals, function(err, result) {
		  if (err) {
			throw err;
		  }
		  cb(result);
		});
	},

	update: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;
	
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
	
		console.log(queryString);
		connection.query(queryString, function(err, result) {
		  if (err) {
			throw err;
		  }
		  cb(result);
		});
	}
};
	
module.exports = orm;


// 	selectAll: function(callback) 
// 	{
	
// 		connection.query('SELECT * FROM burgers', function(err, result)
// 		{
// 			if (err) throw err;
// 			callback(result);
// 		});
// 	},

// 	insertOne: function(burger_name, callback)
// 	{
// 		connection.query('INSERT INTO burgers SET ?', 
// 			{	burger_name: burger_name,
// 				devoured_burgers: false,
// 			}, function(err, result)
// 			{
// 				if (err) throw err;
// 				callback(result);
// 			});
				
// 	},

// 	updateOne: function(burgerID, callback)
// 	{
// 		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured_burgers: true}, {id: burgerID}],
// 			function(err, result)
// 			{
// 				if (err) throw err;
// 				callback(result);
// 			});
// 	}
// };


/
