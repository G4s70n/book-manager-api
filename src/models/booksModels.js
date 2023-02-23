const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Books', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        publication_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        
    })
}
