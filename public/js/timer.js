
//<script type="module" src="recipes.js"></script>
// import { time } from './recipes.js';
// let val = time();
// alert(val);
//var time = require("./recipes.js");

var correct = time.time;
//var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
var wins = 0;
var losses = 0;
var userGuess = document.getElementById("cookTimeGuess").value; 


//stopping user from inputting more information after they've guessed 5 times
var stopInput = function() {
    document.getElementById("cookTimeGuess").disabled = true;
}

   // Function that updates the score...
   function updateScore() {
    
  }

$("#cookTimeGuess").click(function(timeGuess) {
    alert("clicked");
    guessesLeft--;
	guessesLeft();

    if(correct === userGuess) 
   {     
       console.log("CONGRATULATIONS!"); 
       wins++;
       document.querySelector("#winPoints").innerHTML = wins;
       updateScore();
       stopInput();
               // add points leftover from 5
   }
   else
   { 
       guessesLeft--; 
       console.log("try again")
       document.querySelector("#losePoints").innerHTML = losses;
       updateScore();
       losses++
   }
   if (guessesLeft === 0)
   {
    stopInput()
   }

    //console.log(time.time);
//psychic game
   // document.getElementById("cookTimeGuess").onclick = function(){ 
      //comparing string to string, instead of as integers
   // number guessed by user  
})
   //submit on press enter
   document.getElementById('cookTimeGuess').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
       console.log("entered");
        //event.preventDefault();
       event.submit(timeGuess);
    }
   })

  //

  
	


    // variable with val.trim
    //comepaure var to value in data source
    //if match give point
    //if no match loose point
    // 5 tries - try variable to keep track

// if else statement
//submit on enter

