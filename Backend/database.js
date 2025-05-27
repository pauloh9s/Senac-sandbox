import { Sequelize } from "sequelize";

const sequelize = new Sequelize('testbdc', 'root', '5050666',{
    host:  'localhost',
    dialect: 'mysql'
});

export default sequelize;