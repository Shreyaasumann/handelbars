var path = require('path')
var orm = require(path.join(__dirname, '../config/orm.js'));

var burger = {

  selectAll: function(callback) {
    orm.selectAll("burgers",function(res) {
      callback(res);
    });
  },

  create: function(burger_name, callback) {
    orm.create("burgers", [
      "burger_name", "devoured"
  ], [
    name, false
  ], cb);
},

  updateOne: function(burger_id, callback)
  {
    orm.updateOne(burger_id, function(res)
    {
      callback(res);
    });
  }

};

module.exports = burger;
