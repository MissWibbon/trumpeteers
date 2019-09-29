var recipes = require("./recipes.json");


function getRandomRecipe() {


    var random = Math.floor(Math.random * recipes.length);
    return recipes[random];
}
getRandomRecipe();

console.log(getRandomRecipe().recipe_name);