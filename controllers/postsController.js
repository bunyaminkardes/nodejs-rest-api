const postsController = {};
const mongoose = require("mongoose");
const PostModel = require('../models/postModel.js'); //ilgili model'ı controller'a dahil et.

postsController.createPost = async (req, res) => {
    const post = new PostModel({
        title : req.body.title,
        message : req.body.message
    });
    try {
        await post.save();
        res.status(201).json(post);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

postsController.getAllPosts = async (req, res) => {
    const allPosts = await PostModel.find();
    return res.status(200).json(allPosts);
}

postsController.getPost = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : 'bu id değerine sahip bir post bulunamadı.'});
        }
        const post = await PostModel.findById(id);
        return res.status(200).json(post);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

postsController.updatePost = async (req, res) => {
    const id = req.params.id;
    const {title, message} = req.body;
    const updatedPost = {_id : id, title, message};

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : 'bu id değerine sahip bir post bulunamadı.'});
        }
        await PostModel.findByIdAndUpdate(id, updatedPost);
        res.json(updatedPost);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

postsController.deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : 'bu id değerine sahip bir post bulunamadı.'});
        }
        await PostModel.findByIdAndDelete(id);
        res.json({message : 'post başarıyla silindi.'});
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

module.exports = postsController;