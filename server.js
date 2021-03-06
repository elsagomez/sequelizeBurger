var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = require("./controllers/burger_controller.js");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

var db = require("./models");

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
