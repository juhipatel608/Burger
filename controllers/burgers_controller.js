var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/burger/eat/:id", function (req, res) {
  burger.update (req.params.id, function(data) {
    res.redirect("/");    

  })
})



// router.post("burger/create", function(req, res) {
//   burger.create([
//    "name", "devoured"
//  ], [
//    req.body.burger_name, req.body.devoured
//  ], function() {
//     // Send back the ID of the new quote
//     res.redirect("/");
//   });
// });



router.post('/burger/create', function (req, res) 
{
  burger.create(req.body.burger_name, function() 
  {
    res.redirect('/');
  });
});


router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    condition: req.body.condition
  }, condition, function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = router;