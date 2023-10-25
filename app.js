// Export all nppm packages
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('./db');
// const encrypt = require("mongoose-encryption")

// Export all controllers
const { createNewUser, validateUser } = require('./controllers/userController');

// Export all models
const User = require('./models/user');
const Experience = require('./models/experience');

// Set up app
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("res"));

// Set up web pages requests and responds
app.get("/", (req, res) => {
    res.render('welcome');
});

app.get("/work", (req, res) => {
    res.render('work');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.get("/register", (req, res) => {
    res.render('register');
});

/**
 * Registers a new user.
 */
app.post("/register", (req, res) => {
    const registeredUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })

    createNewUser(registeredUser);

    // after regestering the user, redirect to the home page.
    res.render("home");
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (validateUser == null){  
        res.render("home")

    }else { 
        res.render("login")
    }
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

// Start the server up!
app.listen(port, () => {
    console.log("Hammond Center up and running!");
    
});