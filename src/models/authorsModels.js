const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Authors', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },

    })
};