var db = require("../models");
var passport = require("passport")
var LocalStrategy = require('passport-local').Strategy;
var recipes = require("../config/recipes.json");


module.exports = function(app) {

  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  // //Create login route with Passport
  // // register?
  
  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  //PASSPORT????
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
  
      // app.route('/login').post(
      //   passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
      //   res.redirect('/profile');
      // });
      app.post("/login", function(req, res) {
        console.log(req.body)
        res.end()
      })
    }

  
  ));

};

 