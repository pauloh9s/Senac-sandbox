import { DataTypes } from 'sequelize';
import  sequelize  from '../database.js';

const User = sequelize.define('User', {

    firstname_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname_user: {
        type: DataTypes.STRING
    }
})

export default User;