const config = {
    "username": "root",
    "password": "root",
    "database": "db_parcial",
    "host": "35.225.211.178",
    "dialect": "mysql"
}
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, config);
module.exports = sequelize;