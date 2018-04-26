'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    tinggi_badan: DataTypes.INTEGER,
    berat_badan: DataTypes.INTEGER,
    gender:DataTypes.STRING,
    level_activity:DataTypes.STRING,
    age:DataTypes.INTEGER,
    packetsId:DataTypes.INTEGER
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};
