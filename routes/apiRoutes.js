var db = require("../models");
var passport = require("passport")
var LocalStrategy = require('passport-local').Strategy;
var recipes = require("../config/recipes.json");


module.exports = function(app) {

  //PASSPORT????
  // passport.use(new LocalStrategy(
  //   function(username, password, done) {
  //     User.findOne({ username: username }, function (err, user) {
  //       if (err) { return done(err); }
  //       if (!user) {
  //         return done(null, false, { message: 'Incorrect username.' });
  //       }
  //       if (!user.validPassword(password)) {
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }
  //       return done(null, user);
  //     });
  
  //     // app.route('/login').post(
  //     //   passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
  //     //   res.redirect('/profile');
  //     // });
  //     app.post("/login", function(req, res) {
  //       console.log(req.body)
  //       res.end()
  //     });
  //   }

  
  // ));
  
  //app.get('/game', function(req, res) {
  //  res.json(recipes);
  //})

  // Recipes json route
  app.get('/api/recipes', function(req, res) {
    res.json(recipes);
    function getRandomRecipe() {
      var random = Math.floor(Math.random() * recipes.length);
      return recipes[random];
    }
    getRandomRecipe();
    
    var recipeName = getRandomRecipe().recipe_name;
    var recipeImage = getRandomRecipe().image;
    var recipeServeSize = getRandomRecipe().servingSize;
    var recipeCookTime = getRandomRecipe().cookingMinutes;
    var recipePoints = getRandomRecipe().totalPoints;

    console.log("recipe name " + recipeName);
    console.log("recipe image " + recipeImage);
    console.log("serving size " + recipeServeSize);
    console.log("cook time " + recipeCookTime);
    console.log("total points " + recipePoints);
    
    document.getElementById("recipe-title").innerHTML = recipeName.val();
    
    });



};

 