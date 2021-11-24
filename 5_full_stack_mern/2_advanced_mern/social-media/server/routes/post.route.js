const PostController = require('../controllers/post.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/newPost', authenticate, PostController.createNewPost);
}