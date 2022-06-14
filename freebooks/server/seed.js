const {books} = require('./seedData.js');

const {sequelize} = require('./db');
const {Book} = require('./model.js');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(books.map(book => Book.create(book)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();