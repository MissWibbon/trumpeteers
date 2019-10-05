<<<<<<< HEAD
=======

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
var isProcessing = false
var userGuessHour = document.getElementById("hours").value;
var userGuessMinute = document.getElementById("minutes").value;
var cookHours = randomRecipe.cookingHours;
var cookMinutes = randomRecipe.cookingMinutes;
<<<<<<< HEAD
​
var guessesLeft = 5;
//var timerWins = 5;
//var timerLosses = 1;
​
console.log(cookHours);
console.log(cookMinutes);
​
=======

var guessesLeft = 5;
//var timerWins = 5;
//var timerLosses = 1;

console.log(cookHours);
console.log(cookMinutes);

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
//stopping user from inputting more information after they've guessed 5 times
var stopInput = function() {
  document.getElementById("hours").disabled = true;
  document.getElementById("minutes").disabled = true;
};
<<<<<<< HEAD
​
=======

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
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
<<<<<<< HEAD
​
function handleTime(userGuessHour, userGuessMinute) {
​
  if (cookHours === userGuessHour && cookMinutes === userGuessMinute) {
​
=======

function handleTime(userGuessHour, userGuessMinute) {

  if (cookHours === userGuessHour && cookMinutes === userGuessMinute) {

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
    console.log("CONGRATULATIONS!");
    //document.querySelector("#winPoints").innerHTML = timerWins;
   // timerWins++;
 
   $('#cookTimeGuess').addClass('clickedRight');
    stopInput();
<<<<<<< HEAD
​
=======

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
  
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
<<<<<<< HEAD
​
Collaps
=======

>>>>>>> a88975b705c8ddf67bdeb1296f5f9283129b0c89
