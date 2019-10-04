//<script type="module" src="recipes.js"></script>
// import { time } from './recipes.js';

//var time = require("./recipes.js");

var cookHours = randomRecipe.cookingHours;
var cookMinutes = randomRecipe.cookingMinutes;
//var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
var wins = 0;
var losses = 0;
var userGuessHour = document.getElementById("hours").value;
var userGuessMinute = document.getElementById("minutes").value;
//var userGuess = userGuessHour + userGuessMinute;
console.log(cookHours);
console.log(cookMinutes);

//stopping user from inputting more information after they've guessed 5 times
var stopInput = function() {
  document.getElementById("hours").disabled = true;
  document.getElementById("minutes").disabled = true;
};

//$("#cookTimeGuess").click(handleTime);
//submit on press enter
document
.getElementById("minutes")
.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    console.log(userGuessMinute);
    console.log(userGuessHour);
    //console.log(userGuess);
    handleTime();
   
      // console.log("entered");
      //event.preventDefault();
      //console.log(event);
      //ajax request

      //event.submit();
    }
  });

function handleTime() {
  //alert("clicked");
  //guessesLeft--;
  //guessesLeft();
console.log(wins);
  if (cookHours === userGuessHour && cookMinutes === userGuessMinute) {
      console.timeLog(cookHours);
      console.log(cookMinutes);

    console.log("CONGRATULATIONS!");
    document.querySelector("#winPoints").innerHTML = wins;
    wins++;
    stopInput();
    // add points leftover from 5
  } else {
    guessesLeft--;
    console.log("try again");
    document.querySelector("#losePoints").innerHTML = losses;
    losses++;
  }
  if (guessesLeft === 0) {
    stopInput();
  }
}

