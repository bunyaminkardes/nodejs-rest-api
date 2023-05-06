const postRouter = require("express").Router();
const postsController = require("../controllers/postsController.js");

//yeni post oluştur
postRouter.post('/', postsController.createPost);

//tüm postları getir
postRouter.get('/', postsController.getAllPosts);

//id parametresine göre post getir
postRouter.get('/:id', postsController.getPost);

//id parametresine göre post güncelle
postRouter.patch('/:id', postsController.updatePost);

//id parametresine göre post sil
postRouter.delete('/:id', postsController.deletePost);

module.exports = postRouter;