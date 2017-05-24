 var express = require("express");

 var router = express.Router();

 var db = require("../models");

 //Create all our routes and set up logic within those routes where required.

 router.get("/", function(req, res) {
     db.burger.findAll({}).then(function(data) {

         var hbsObject = { burgers: data };
         res.render('index', hbsObject);

     });
 });

 router.post("/burgers/create", function(req, res) {
     db.burger.create({
         description: req.body.description,

     }).then(function(dbBurger) {

         res.redirect('/');
     });
 });


 router.put("/burgers/update/:id", function(req, res) {
     db.burger.update({
         devoured: true
     }, {
         where: {
             id: req.body.id
         }
     }).then(function(dbBurger) {

         res.redirect('/');
     });
 });


 //Export routes for server.js to use.
 module.exports = router;