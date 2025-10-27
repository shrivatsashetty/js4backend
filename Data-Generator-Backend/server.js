import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import { User } from "./models/Users.js";


await mongoose.connect("mongodb://localhost:27017/companyDB");

const app = express();
const PORT = 3000;

/* Enable CORS for local development */
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

//  Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/* READ: GET All documents */
app.get("/users", async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200);
        res.send(users);
    } 
    catch (err) {
        next(err);
    }
});

/* READ: find a collection by _id and return */
app.get("/users/:username", async (req, res, next) => {
    try {
        const username = req.params.username
        const user = await User.find({username: username});
        res.status(200);
        res.send(user);
    } 
    catch (err) {
        next(err);
    }
});

/* CREATE: Insert a single document into the database */
app.post('/users', async (req, res, next) => {
    try {
        if(req.body) {
            const user = req.body;
            const savedUser = await User.insertOne(user);
            res.status(201);
            res.send(savedUser);
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
app.delete('/users', async (req, res, next) => {
    try {
        await User.deleteMany();
        res.status(204); // request fullfilled but there's nothing to send
        res.end(); // just end the request as there's nothing to send
    } 
    catch (err) {
        next(err);
    }
});

/* DELETE by Id */
app.delete('/users/:username', async (req, res, next) => {
    try {
        const deletedUser = await Todo.findByIdAndDelete(req.params.username);
        res.status(200);
        res.send(deletedUser);
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
