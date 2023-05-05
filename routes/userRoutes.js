const userRouter = require("express").Router();
const usersController = require("../controllers/usersController.js");

//yeni kullanıcı oluştur
userRouter.post('/', usersController.createUser);

//tüm kullanıcıları getir
userRouter.get('/', usersController.getAllUsers);

//id parametresine göre kullanıcı getir
userRouter.get('/:id', usersController.getUser);

//id parametresine göre kullanıcı güncelle
userRouter.patch('/:id', usersController.updateUser);

//id parametresine göre kullanıcı sil
userRouter.delete('/:id', usersController.deleteUser);

module.exports = userRouter;