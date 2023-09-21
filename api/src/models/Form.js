const { DataTypes } = require('sequelize');

// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('form', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    /* formUserData: {
      type: DataTypes.JSON,
      allowNull: false
    }, */
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true, // en caso que no tome la información
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    preferred_language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    how_found: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    newsletter_subscription: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    
  });
};
