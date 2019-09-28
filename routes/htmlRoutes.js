var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load Login page 
  app.get("/login", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

   // Load Quite page 
   app.get("/quit", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("quit", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

    // Start Game
    app.get("/game", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.render("game", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });

     // End of Game
     app.get("/endgame", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.render("game", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
