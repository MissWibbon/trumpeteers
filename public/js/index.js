// Get references to page elements
var $recipeTitle = $("recipe-title");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var recipe = require('.../config/recipes.json');

// The API object contains methods for each kind of request we'll make
var API = {
  saveRecipe: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/recipes",
      data: JSON.stringify(example)
    });
  },
  getRecipe: function () {
    return $.ajax({
      url: "api/recipes",
      type: "GET"
    });
  },
  // deleteRecipe: function(id) {
  //   return $.ajax({
  //     url: "api/recipes/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshRecipes = function () {
  API.getRecipes().then(function (data) {
    var $recipes = data.map(function (recipe) {
      var $a = $("<a>")
        .text(recipe.text)
        .attr("href", "/recipe/" + recipe.recipeName);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": recipe.recipeName
        })
        .append($a);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      // $li.append($button);

      return $li;
    });

    $recipeList.empty();
    $recipeList.append($recipes);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var recipe = {
    title: $recipeTitle.val().trim(),
    servings: recipe.servingSize.val().trim()
  };

  if (!(recipe.$recipeTitle && recipe.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveRecipe(recipe).then(function () {
    refreshRecipes();
  });

  $recipeTitle.val("");
  recipe.servingSize.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };


// Add event listeners to the submit and delete buttons
//$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$(document).on("click", "submitBtn", function () {
  alert("click");
});