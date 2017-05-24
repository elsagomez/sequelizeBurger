module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    description: {
      type: DataTypes.STRING,
     
      },

    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }                                                                                     
 
  });
  return Burger;
};

