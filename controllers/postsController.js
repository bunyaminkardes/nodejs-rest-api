const postsController = {};
const mongoose = require("mongoose");
const PostModel = require('../models/postModel.js'); //ilgili model'ı controller'a dahil et.

postsController.createPost = async (req, res) => {
    res.send("...");
}

postsController.getAllPosts = async (req, res) => {
    res.send("...");
}

postsController.getPost = async (req, res) => {
    res.send("...");
}

postsController.updatePost = async (req, res) => {
    res.send("...");
}

postsController.deletePost = async (req, res) => {
    res.send("...");
}

module.exports = postsController;