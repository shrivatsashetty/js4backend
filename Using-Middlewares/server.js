const express = require("express");
const app = express();

PORT = 3000;


/* a middleware function which logs the current timestamp to console
 * whenever it recieves an HTTP request of any kind 
 * the mount path will be "/" by default */
app.use((req, res, next) => {
    console.log("HTTP Request recieved at Time:", Date.now());
    next();
});


/* loading a series of middleware functions at a mount point */
app.get(
    "/user/:id",
    (req, res, next) => {
        /* if the user ID is 0,
         * skip all the middlewares functions in the stack and
         * move to the to the next matching route (matching path and HTTP method) */
        if (req.params.id === "0") {
            next("route");
        }
        // otherwise pass the control to the next middleware function in this stack
        else {
            next();
        }
    },
    (req, res, next) => {
        console.log("Request URL:", req.originalUrl);
        next(); // passes the request to the next route handler
    },
    (req, res, next) => {
        console.log("Request Type:", req.method);
        res.send(`Hello from User with Id ${req.params.id}`); // ends the req res cycle
    }
);


/* handler for the path /user/:id  when the id parameter is 0 
 * note that the app.METHOD & the mount path should match for the control
 * to come here after next('route') gets called from previous handler */
app.get("/user/:id", (req, res, next) => {
    res.send(`Oops!! No User With Id ${req.params.id}`);
});


app.get("/welcome", (req, res) => {
    res.send("<h2>Welcome!!!</h2>");
});


app.get("/", (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
});


/* error handling middleware, takes 4 arguments */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something Went Wrong!");
});


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:3000`);
});
