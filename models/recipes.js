var recipes = require("../config/recipes.json");

module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      instructions: DataTypes.STRING,
      cookTime: DataTypes.INTEGER
    });
    return Recipe;
  };

console.log(recipes);

function getRandomRecipe() {
    var random = math.floor(Math.random() * recipes.length);
    console.log(random);
    return recipes[random];
}
getRandomRecipe();

var recipeName = getRandomRecipe().recipe_name;
console.log(recipeName);