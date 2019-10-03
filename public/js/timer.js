//<script type="module" src="recipes.js"></script>
// import { time } from './recipes.js';
// let val = time();
// alert(val);
//var time = require("./recipes.js");

// var correctHour = cookHours;
// var correctMinute = cookMinutes;
var cookHours = randomRecipe.cookingHours;
var cookMinutes = randomRecipe.cookingMinutes;
//var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
var wins = 0;
var losses = 0;
var userGuessHour = document.getElementById("cookTimeGuess").value;
var userGuessMinute = document.getElementById("cookTimeGuess").value;
var userGuess = userGuessHour + userGuessMinute;
console.log(cookHours);
console.log(cookMinutes);

//stopping user from inputting more information after they've guessed 5 times
var stopInput = function() {
  document.getElementById("cookTimeGuess").disabled = true;
};
var stopInput2 = function() {
  document.getElementById("cookTimeGuess").disabled = true;
};

// Function that updates the score...
//function updateScore() {}
//update with both inputs
//$("#cookTimeGuess").click(handleTime);
//submit on press enter
document
  .getElementById("cookTimeGuess")
  .addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      handleTime();
      // console.log("entered");
      //event.preventDefault();
      console.log(event);
      //ajax request

      //event.submit();
    }
  });

//

function handleTime() {
  //alert("clicked");
  //guessesLeft--;
  //guessesLeft();
console.log(wins);
  if ((cookHours, cookMinutes === userGuess)) {
      console.timeLog(cookHours);
      console.log(cookMinutes);

    console.log("CONGRATULATIONS!");
    wins++;
    console.log(wins);
    document.querySelector("#winPoints").innerHTML = wins;
    //updateScore();
    stopInput();
    // add points leftover from 5
  } else {
    guessesLeft--;
    console.log("try again");
    document.querySelector("#losePoints").innerHTML = losses;
    //updateScore();
    losses++;
console.log(cookMinutes)
  }
  if (guessesLeft === 0) {
    stopInput();
    stopInput2();
  }

  //console.log(time.time);
  //psychic game
  // document.getElementById("cookTimeGuess").onclick = function(){
  //comparing string to string, instead of as integers
  // number guessed by user
}

// variable with val.trim
//comepaure var to value in data source
//if match give point
//if no match loose point
// 5 tries - try variable to keep track

// if else statement
//submit on enter
