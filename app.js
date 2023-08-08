const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("res"));

//mongoose.connect("mongodb+srv://nathan:7lRNSzasTHoOluYL@nathanhammond.affbppz.mongodb.net/?retryWrites=true&w=majority");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

app.get("/", (req, res) => {
    res.render('home');
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

// Start the server up!
app.listen(port, () => {
    console.log("Nathan's portfolio up and running!.");
});