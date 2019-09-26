module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      winPoints: DataTypes.INTEGER,
      losePoints: DataTypes.INTEGER
    });
    return User;
  };
  