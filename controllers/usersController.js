const usersController = {};
const userModel = require('../models/userModel.js'); //ilgili model'ı controller'a dahil et.

usersController.getAllUsers = (req, res) => {
    res.send('oldu canım');
}

usersController.getUser = (req, res) => {
    const userID = req.params.id;
    res.send('gönderilen parametre : ' + userID);
}

usersController.createUser = async (req, res) => {
    const user = req.body;
    const post = new userModel({
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

usersController.updateUser = (req, res) => {
    const userID = req.params.id;
    res.send('güncellenecek olan kullanıcı : ' + userID);
}

usersController.deleteUser = (req, res) => {
    const userID = req.params.id;
    res.send('silinecek olan kullanıcı : ' + userID); 
}

module.exports = usersController;