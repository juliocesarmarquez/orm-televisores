const { DataTypes } = require('sequelize');

function creaModelMod(connection) {
  const Modelo = connection.define('Modelos', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
})
return Modelo;
}

module.exports = {
creaModelMod
}