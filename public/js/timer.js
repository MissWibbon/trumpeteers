var time = require("./recipes.js")

var timer = $("#cookTimeGuess").val().trim();
var guesses = 5;

$("#cookTimeGuess").click(function() {
    alert("clicked");
    console.log(time.time);

   // document.getElementById("cookTimeGuess").onclick = function(){ 
      //comparing string to string, instead of as integers
   // number guessed by user  
   var correct = time.time;
   var userGuess = document.getElementById("cookTimeGuess").value; 
  
   if(correct == userGuess) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guesses + " GUESS "); 
               // add points leftover from 5
   }
   else
   { 
       guesses--; 
       alert("try again")
   }
   if (guesses === 0)
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

