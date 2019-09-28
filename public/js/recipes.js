var recipes = require("./recipes.json");

console.log(recipes);

function getRandomRecipe() {
    var random = math.floor(Math.random() * recipes.length);
    console.log(random);
    return recipes[random];
}
getRandomRecipe();