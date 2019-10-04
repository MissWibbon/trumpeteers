//<script type="module" src="recipes.js"></script>
// import { time } from './recipes.js';

//var time = require("./recipes.js");

var isProcessing = false
var userGuessHour = document.getElementById("hours").value;
var userGuessMinute = document.getElementById("minutes").value;
var cookHours = randomRecipe.cookingHours;
var cookMinutes = randomRecipe.cookingMinutes;
//var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
var timerWins = 5;
var timerLosses = 1;
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
    var userGuessHour = document.getElementById("hours").value;
    var userGuessMinute = document.getElementById("minutes").value;
        if (isProcessing === false) {
            handleTime(userGuessHour, userGuessMinute)
            isProcessing = true
        } else {
          isProcessing = false
          return 
        }
    console.log(userGuessHour);
    console.log(userGuessMinute);
    //console.log(userGuess);
   // handleTime(userGuessHour, userGuessMinute);
 
      // console.log("entered");
      //event.preventDefault();
      //console.log(event);
      //ajax request

      //event.submit();
    }
 
  });

function handleTime(userGuessHour, userGuessMinute) {
console.log(timerWins);
  if (cookHours === userGuessHour && cookMinutes === userGuessMinute) {
     // console.log(cookHours);
      //console.log(cookMinutes);

    console.log("CONGRATULATIONS!");
    document.querySelector("#winPoints").innerHTML = timerWins;
    timerWins++;
    stopInput();
    // add points leftover from 5
  } else {
    guessesLeft--;
    console.log("try again");
    document.querySelector("#losePoints").innerHTML = timerLosses;
    timerLosses++;
    timerWins--;
  }
  if (guessesLeft === 0) {
    stopInput();
  }
}

