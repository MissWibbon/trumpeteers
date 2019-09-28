"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

const axios = require("axios");

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

function recipeApi() {
  axios.get('https://api.spoonacular.com/recipes/random?apiKey=13a30efe431d4713aa2b0934b908feae')
  .then(function (response) {
    // handle success
    
    var results = response.data;
    var recipe = response.data.recipes[0].title;
    var image = response.data.recipes[0].image;
    var servings = response.data.recipes[0].servings;
    var ingredients = response.data.recipes[0].extendedIngredients;
    var instructions = response.data.recipes[0].instructions.split(".");
    var cookingDuration = response.data.recipes[0].readyInMinutes;


   console.log(recipe);
   console.log(image);
   console.log(servings);
   console.log(instructions);
   console.log(ingredients);
   console.log(cookingDuration);
   console.log(results);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
recipeApi();

function incorrectRecipeApi() {
  axios.get('https://api.spoonacular.com/recipes/random?apiKey=13a30efe431d4713aa2b0934b908feae')
  .then(function (response) {
    // handle success
    
    var results = response.data;
    // var incorrectRecipe = response.data.recipes[0].title;
    var incorrectIngredients = response.data.recipes[0].extendedIngredients;
    var incorrectInstructions = response.data.recipes[0].instructions;
    // var incorrectInstructions = response.data.recipes[0].instructions.split(".");


    //console.log(results);
    // console.log(results);
    // console.log(incorrectRecipe);
    console.log(`
    Incorrect Instructions
    ___________________________________________________________________
    ${incorrectInstructions}
    
    ___________________________________________________________________
    `);
    // console.log(incorrectIngredients);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
incorrectRecipeApi();

module.exports = db;
