var express = require("express");

// Setup server.
var app = express();

/* Serve resources for good.html */
app.get("/good.html", function (req, res) {
    res.sendFile("good.html", {root: __dirname});
});

app.get("/css/style.css", function (req, res) {
    res.sendFile("styles/style.css", {root: __dirname});
});

app.get("/js/script.js", function (req, res) {
    res.sendFile("scripts/script.js", {root: __dirname});
});

/* Serve resources for bad.html */
app.get("/bad.html", function (req, res) {
    res.sendFile("bad.html", {root: __dirname});
});

app.get("/style.css", function (req, res) {
    res.sendFile("styles/style.css", {root: __dirname});
});

app.get("/script.js", function (req, res) {
    res.sendFile("scripts/script.js", {root: __dirname});
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on " + port);

