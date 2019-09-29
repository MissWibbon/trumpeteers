var db = require("../models");
var Recipes = require("../config/recipes.json");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
    });

  // Load Login page 
  app.get("/login", function(req, res) {
      res.render("login");
  });

   // Load Quite page 
   app.get("/quit", function(req, res) {
      res.render("quit");
    });


    // Start Game
    app.get("/game", function(req, res) {
        res.render("game");
      });


     // End of Game
     app.get("/endgame", function(req, res) {
        res.render("game");
      });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Recipes.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
