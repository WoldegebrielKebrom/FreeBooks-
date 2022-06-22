const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const { Book } = require('./model')


const port =process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));

app.use(express.json());

// Get
app.get("/books", async (request,response) => {
    console.log(request.url)
    const books = await Book.findAll();
    response.send(books);

});

// POST 
app.post("/books", async (request,response) => {
  try {
    const newBook = await Book.create(request.body)
    response.send(newBook)
  } catch (error) {
    next(error);
  }
})




//Get single Book
app.get("/books/:query", async (request, response) => {
    const query = request.params.query;
    console.log(query)
    console.log('this is the query', query)
    
    try {
      const books = await Book.findAll({where: { category: query } });
      response.send(books);
    } catch (error) {
      response.send(error)
      next(error);
    }
  });

