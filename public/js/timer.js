
var isProcessing = false
var userGuessHour = document.getElementById("hours").value;
var userGuessMinute = document.getElementById("minutes").value;
var cookHours = randomRecipe.cookingHours;
var cookMinutes = randomRecipe.cookingMinutes;

var guessesLeft = 5;
//var timerWins = 5;
//var timerLosses = 1;

console.log(cookHours);
console.log(cookMinutes);

//stopping user from inputting more information after they've guessed 5 times
var stopInput = function() {
  document.getElementById("hours").disabled = true;
  document.getElementById("minutes").disabled = true;
};

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
    }
 
  });

function handleTime(userGuessHour, userGuessMinute) {

  if (cookHours === userGuessHour && cookMinutes === userGuessMinute) {

    console.log("CONGRATULATIONS!");
    //document.querySelector("#winPoints").innerHTML = timerWins;
   // timerWins++;
 
   $('#cookTimeGuess').addClass('clickedRight');
    stopInput();

  
  } else {
    guessesLeft--;
    console.log("try again");
   // document.querySelector("#losePoints").innerHTML = timerLosses;
   // timerLosses++;
   // timerWins--;
   $('#cookTimeGuess').addClass('clickedWrong');
  }
  if (guessesLeft === 0) {
    $('#cookTimeGuess').addClass('clickedWrong');
    stopInput();
  }
}

