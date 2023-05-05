const express = require("express");
const dotEnv = require("dotenv").config();

const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use('/users', userRoutes);
//app.use('/posts', postRoutes);



const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/apiDB");

app.listen(process.env.PORT);