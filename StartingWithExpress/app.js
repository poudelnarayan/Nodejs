const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleWare');
    next();
    /*
        We have to call next() here to allow the request to travel on the next middleware in the line.
        So it basicaly goes from top to bottom through that file you could say, through all the middleware
        functions but only if we call next() .
        If we don't call next() , it just dies.So if we dont call next , we should actually send back a response because otherwise
        the request can't continue it's journey, So it will never reach a place where we might send a response.

    */
});

app.use((req, res, next) => {
    console.log('In another the middleWare');
    res.send('<h1>Hello from express</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);