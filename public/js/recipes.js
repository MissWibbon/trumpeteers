var recipes = require("../config/recipes.json");



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