const {DataTypes} = require('sequelize');
const sequelize = require('../database.js');

const User = sequelize.define ('User', 
    {
        id_user:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
       name_user: {
            type: DataTypes.STRING,
            allowNull: false
       }         
    }
)

module.exports = User;