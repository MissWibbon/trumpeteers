var audio = require("./audio.json");


function getAudioRecipe() {


    var random = Math.floor(Math.random * recipes.length);
    return audio[random];
}
getAudioRecipe();

console.log(getAudioRecipe().audio_name);