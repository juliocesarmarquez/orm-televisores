const { DataTypes } = require('sequelize');

function creaModelTv(connection) {
  const Televisores = connection.define('Televisores', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    pantalla: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    smart: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    precio:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

  })
  return Televisores;
}

module.exports = {
  creaModelTv
}