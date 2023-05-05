const userRouter = require("express").Router();
const postsController = require("../controllers/postsController.js");

//yeni post oluştur
userRouter.post('/', postsController.createPost);

//tüm postları getir
userRouter.get('/', postsController.getAllPosts);

//id parametresine göre post getir
userRouter.get('/:id', postsController.getPost);

//id parametresine göre post güncelle
userRouter.patch('/:id', postsController.updatePost);

//id parametresine göre post sil
userRouter.delete('/:id', postsController.deletePost);

module.exports = userRouter;