// import express from "express"; // set "type": "module" in package.json
const express = require("express");
const app = express();
const port = 3000;

const birds = require('./routes/birds');
app.use('/birds', birds);

const blogs = require('./routes/blogs');
app.use('/blogs', blogs);

const pages = require('./routes/pages');
app.use('/pages', pages);

/* make a folder public to server static files
* visit http://localhost:3000/info.txt */
app.use(express.static("public"));

/* default GET request 
 * http://localhost:3000/ */
app.get("/", (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

/* get html content as response, the response headers are auto set */
app.get("/html", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

/* get json in response 
 * http://localhost:3000/json */
app.get("/json", (req, res) => {
    res.json(JSON.parse('{"message": "Hello World!!!"}'));
});

// http://localhost:3000/user/1/books/atomic-habbits?genre=business&publisher=penguin-book-house
app.get("/user/:userId/books/:bookName", (req, res) => {
    res.send(
        {
            params: req.params, // {"userId":"1","bookName":"atomic-habbits"}
            query: req.query, // {"genre": "business", "publisher": 'penguin-book-house'}
        }
    );
});


app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
