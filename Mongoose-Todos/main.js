import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js"


await mongoose.connect("mongodb://localhost:27017/tasks");

const app = express();
const PORT = 3000;


// 1. Middleware to parse JSON bodies
app.use(express.json());

// 2. Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/* READ: GET All To Dos */
app.get("/todos", async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.status(200);
        res.send(todos);
    } 
    catch (err) {
        next(err);
    }
});

/* READ: find a collection by _id and return */
app.get("/todos/:id", async (req, res, next) => {
    try {
        const _id = req.params.id
        const todo = await Todo.findById(_id).exec();
        res.status(200);
        res.send(todo);
    } 
    catch (err) {
        next(err);
    }
});

/* CREATE: Insert a single document into the database */
app.post('/todos', async (req, res, next) => {
    try {
        if(req.body) {
            const todo = req.body;
            const savedDoc = await Todo.insertOne(todo);
            res.status(201);
            res.send(savedDoc);
        }
        else {
            res.status(400) // Bad Request due to incorrect/empty request body
            res.end();
        }
    } 
    catch (err) {
        next(err);
    }
});

/* CREATE: insertMany To Dos at once */
app.post('/todos/insertMany', async (req, res, next) => {
    // let insertedDocs;
    try {
        if(req.body) {
            const documentsToInsert = req.body;
            const insertedDocs = await Todo.insertMany(documentsToInsert);
            res.status(201);
            res.send(insertedDocs);
        }
        else {
            res.status(400) // Bad Request due to incorrect/empty request body
            res.end();
        }
    } 
    catch (err) {
        next(err);
    }
});

/* DELETE All */
app.delete('/todos', async (req, res, next) => {
    try {
        await Todo.deleteMany();
        res.status(204); // request fullfilled but there's nothing to send
        res.end(); // just end the request as there's nothing to send
    } 
    catch (err) {
        next(err);
    }
});

/* DELETE by Id */
app.delete('/todos/:id', async (req, res, next) => {
    try {
        const deletedDoc = await Todo.findByIdAndDelete(req.params.id);
        res.status(200);
        res.send(deletedDoc);
    } 
    catch (err) {
        next(err);
    }
});


/* error handling middleware */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});



app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}/`);
});
