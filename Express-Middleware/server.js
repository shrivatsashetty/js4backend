const express = require('express')

const app = express();

const PORT = 3000 

/* a function that will be used as a middleware */
const logger = function (req, res, next) {
    console.log('HTTP Request Recieved');
    next();
}

const requestTime = function (req, res, next) {
    /* add current timestamp as a property to the request object */
    req.requestTime = Date.now();
    next();
}

/* to load the middleware functions */
app.use(logger);
app.use(requestTime);


app.get('/', (req, res) => {
    let responseText = 'Hello World!!! <br>';
    responseText += `<small> Request Timestamp: ${req.requestTime} </small>`
    res.send(responseText);
});


app.listen(PORT);