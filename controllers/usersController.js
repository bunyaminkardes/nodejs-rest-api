const usersController = {};

usersController.getAllUsers = (req, res) => {
    res.send('oldu canım');
}

usersController.getUser = (req, res) => {
    const userID = req.params.id;
    res.send('gönderilen parametre : ' + userID);
}

usersController.createUser = (req, res) => {
    res.send('post isteği atıldı');
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