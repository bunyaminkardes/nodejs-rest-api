require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/apiDB");

app.listen(process.env.PORT);