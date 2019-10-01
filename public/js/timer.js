var time = require("./recipes.js")

var timer = $("#cookTimeGuess").val().trim();
var guessesLeft = 5;
var score = {}

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
   var correct = time.time;
   var userGuess = document.getElementById("cookTimeGuess").value; 

   //submit on press enter
   document.getElementById('cookTimeGuess').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        //event.preventDefault();
        event.submit();
    }
  //
   if(correct == userGuess) 
   {     
       alert("CONGRATULATIONS!"); 
       score++;
       updateScore();
               // add points leftover from 5
   }
   else
   { 
       guessesLeft--; 
       alert("try again")
       updateScore();
   }
   if (guessesLeft === 0)
   {
       //points = 0
       // dont let input anymore
   }
   
    // variable with val.trim
    //comepaure var to value in data source
    //if match give point
    //if no match loose point
    // 5 tries - try variable to keep track

});

// if else statement
//submit on enter

