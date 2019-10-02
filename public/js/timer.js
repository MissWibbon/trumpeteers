var time = require("./recipes.js");

var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
//var score = {};
var wins = 0;
var losses = 0;

   // Function that updates the score...
   function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

$("#cookTimeGuess").click(function() {
    alert("clicked");
    console.log(time.time);
//psychic game
   // document.getElementById("cookTimeGuess").onclick = function(){ 
      //comparing string to string, instead of as integers
   // number guessed by user  
})
   //submit on press enter
   document.getElementById('cookTimeGuess').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        //event.preventDefault();
        event.submit();
    }
   })

  //

  document.onkeyup = function(event) {
	guessesLeft--;

   var correct = time.time;
   var userGuess = document.getElementById("cookTimeGuess").value; 

	guessesLeft();

    if(correct === userGuess) 
   {     
       alert("CONGRATULATIONS!"); 
       wins++;
       document.querySelector("#winPoints").innerHTML = wins;
       updateScore();
               // add points leftover from 5
   }
   else
   { 
       guessesLeft--; 
       alert("try again")
       document.querySelector("#losePoints").innerHTML = losses;
       updateScore();
       losses++
   }
   if (guessesLeft === 0)
   {
       //points = 0
       // dont let input anymore
   }

  };

    // variable with val.trim
    //comepaure var to value in data source
    //if match give point
    //if no match loose point
    // 5 tries - try variable to keep track

// if else statement
//submit on enter

