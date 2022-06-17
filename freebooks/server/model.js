const {Sequelize} = require('sequelize');
const {sequelize} = require('./db');

const Book = sequelize.define('Book', {
    title : Sequelize.STRING,
    name : Sequelize.STRING,
    category  : Sequelize.STRING,
    year : Sequelize.NUMBER,
    path : Sequelize.STRING

})

module.exports = {
    db: sequelize,
    Book,
};