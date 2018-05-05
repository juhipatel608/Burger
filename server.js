var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('The app is listening on port ' + port);
})















