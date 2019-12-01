var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("assets"));
app.use(express.static("documents"));


app.set("view engine", "ejs")

// "/" => "yo"
app.get("/", function (req, res) {
    res.render("home");
})

// "/bye" => "bye"
app.get("/events", function (req, res) {
    res.render("events");
});

// "/bye" => "bye"
app.get("/donate", function (req, res) {
    res.render("donate");
});

// "/bye" => "bye"
app.get("/involvement", function (req, res) {
    res.render("involvement");
});

// "/bye" => "bye"
app.get("/whatwedo", function (req, res) {
    res.render("whatwedo");
});

// "/bye" => "bye"
app.get("/whoweare", function (req, res) {
    res.render("whoweare");
});

// match anything after the colon
app.get("/r/:anything_here", function (req, res) {
    res.send('anyterm accepted');
});

// "error undefined" => "undefined"
app.get("*", function (req, res) {
    res.send('does not exist');
});

// Tell Express to listen for requests 
app.listen(3000, function () {
    console.log("serving on port 3000")
});