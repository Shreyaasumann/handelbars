var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();
var path = require('path');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require(path.join(__dirname, './controllers/burgers_controller'));

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
