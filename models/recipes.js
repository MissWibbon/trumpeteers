module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      instructions: DataTypes.STRING,
      cookTime: DataTypes.INTEGER
    });
    return Recipe;
  };
  