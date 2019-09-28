var recipes = require("./recipes.json");


function getRandomRecipe() {
    var random = Math.floor(Math.random() * recipes.length);
    return recipes[random];
}
getRandomRecipe();

var recipeName = getRandomRecipe().recipe_name;
console.log(recipeName);