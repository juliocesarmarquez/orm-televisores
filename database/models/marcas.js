const { DataTypes } = require('sequelize');

function creaModelMarcas(connection) {
  const Marcas = connection.define('Marcas', {
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
return Marcas;
}

module.exports = {
creaModelMarcas
}