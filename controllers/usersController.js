const usersController = {};
const mongoose = require("mongoose");
const UserModel = require('../models/userModel.js'); //ilgili model'ı controller'a dahil et.

usersController.createUser = async (req, res) => {
    const user = new UserModel({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    });
    try {
        await user.save();
        res.status(201).json(user);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

usersController.getAllUsers = async (req, res) => {
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers);
}

usersController.getUser = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : "Bu id değerine sahip bir kullanıcı bulunamadı."});
        }
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

usersController.updateUser = async (req, res) => {
    const id = req.params.id;
    const {username, password, email} = req.body;
    const updatedUser = {_id: id, username, password, email};

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : "Bu id değerine sahip bir kullanıcı bulunamadı."});
        }
        await UserModel.findByIdAndUpdate(id, updatedUser);
        res.json(updatedUser);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

usersController.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : "Bu id değerine sahip bir kullanıcı bulunamadı."});
        }
        await UserModel.findByIdAndDelete(id);
        res.json({message : "kullanıcı başarıyla silindi."});
    }
    catch(error) {
        res.status(400).json({message : error.message});
    } 
}

module.exports = usersController;