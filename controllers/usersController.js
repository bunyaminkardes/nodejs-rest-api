const usersController = {};
const mongoose = require("mongoose");
const User = require('../models/userModel.js'); //ilgili model'ı controller'a dahil et.

usersController.getAllUsers = (req, res) => {
    res.send('oldu canım');
}

usersController.getUser = (req, res) => {
    const userID = req.params.id;
    res.send('gönderilen parametre : ' + userID);
}

usersController.createUser = async (req, res) => {
    const post = new User({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    });
    try {
        await post.save();
        res.status(201).json(post);
    }
    catch(error) {
        res.status(400).json({message : error.message});
    }
}

usersController.updateUser = async (req, res) => { //?
    const id = req.params.id;
    const {username, password, email} = req.body;
    const updatedUser = {_id: id, username, password, email};

    await User.findByIdAndUpdate(id, updatedUser);

    res.json(updatedUser);
}

usersController.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message : "Bu id değerine sahip bir kullanıcı bulunamadı."});
        }
        await User.findByIdAndDelete(id);
        res.json({message : "kullanıcı başarıyla silindi."});
    }
    catch(error)
    {
        res.status(400).json({message : error.message});
    } 
}

module.exports = usersController;