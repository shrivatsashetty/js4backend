// import express from "express"; // set "type": "module" in package.json
const express = require("express");
const app = express();
const port = 3000;

/* make a folder public to server static files
 * visit http://localhost:3000/info.txt */
app.use(express.static("public"));

/* default GET request */
app.get("/", (req, res) => {
    res.send("Hello World");
});

/* get html content as response, the response headers are auto set */
app.get("/html", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

/* get json in response */
app.get("/json", (req, res) => {
    res.send(JSON.parse('{"message": "Hello World!!!"}'));
});

// http://localhost:3000/books/atomic-habbits?genre=business&publisher=penguin-book-house
app.get("/books/:bookname/", (req, res) => {
    res.send(
        {
            params: req.params, // { "bookname": "atomic-habbits" }
            query: req.query, // {"genre": "business", "publisher": 'penguin-book-house'}
        }
    );
});



app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
