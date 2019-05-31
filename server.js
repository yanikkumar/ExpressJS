var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');       // it's used for using same thing in a page to multiple pages

var app = express();

// teach express to use engine
app.engine('ejs', engine);      // anything you want to add to ejs to make it usefull
app.set('view engine', 'ejs');        // same as what express want to use


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res, next) {
    res.render('home', { name: "Yanik" });       // response the user a webpage + rendering object name from server.js
});

app.get('/about', function (req, res, next) {
    res.render('about');       // response the user a webpage
});

app.listen(8000);		// listening to port 8000
