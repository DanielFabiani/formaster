const { DataTypes } = require('sequelize');

// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('form', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    /* formUserData: {
      type: DataTypes.JSON,
      allowNull: false
    }, */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true, // en caso que no tome la información
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    preferredLanguage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    howFound: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    newsletterSubscription: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    
  });
};
