const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database").connect();

const app = express();

// configure cors
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    express.urlencoded({ extended: true })
);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to Vehicle Tracking Management System." });
});

require('../Auth_project/routes/user.route')(app);
require('../Auth_project/routes/resto.route')(app);

module.exports = app;