var express = require('express');
var burger_router = express.Router();
var burger_call = require('../models/burgers.js');
var bodyParser = require('body-parser');
var path = require('path');
burger_router.use(bodyParser.json());
burger_router.use(bodyParser.urlencoded({extended: false}));
burger_router.use(bodyParser.text());
burger_router.use(bodyParser.json({type:'application/vnd.api+json'}));

burger_router.get('/', function(req,res){
  res.redirect(path.join(__mkdir, '/burger'));
});

burger_router.get(path.join(__mkdir, '/burger'), function(req,res){
  burger_call.read(function(data){
   
    var hbs_object = {burger: data};
   
    res.render(path.join(__dirname, 'index'), hbs_object);
  });
});

burger_router.post(path.join(__dirname, '/burger/add'), function(req, res){

  burger.create(req.body.burger_name, function(req,res) {

    console.log(result);
  
    burger_call.insert(req.body.user_burger, function(data){
      res.redirect(path.join(__mkdir, '/burger'));
    });
  })
});

burger_router.put(path.join(__dirname, '/burger/update/:id?'), function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.update(user_id, function(data){
    res.redirect(path.join(__mkdir, '/burger'));
  });
});

burger_router.put('/burger/delete/:id?', function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.delete(user_id, function(data){
    res.redirect(path.join(__mkdir, '/burger'));
  });
});
module.exports = burger_router;