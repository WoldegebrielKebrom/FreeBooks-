const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const { Book } = require('./model')


const port =process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));

app.use(express.json());


app.get("/books", async (request,response) => {
    const books = await Book.findAll();
    response.send(books);

});