// Import the Express library to create a web server
var express = require('express');

// Create an Express application
var app = express();

// Define a route for GET requests to the root URL ("/")
app.get('/', function (req, res) {
    // Send the response "Hello World" back to the client when this route is accessed
    res.send("Hello World");
})

// Start the server and have it listen on port 3000
var server = app.listen(3000, function () {
    // When the server starts, log a message to the console with the URL where it is running
    console.log("Express App running at http://127.0.0.1:3000/");
});
