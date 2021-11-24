const Post = require("../models/post.model");
const jwt = require('jsonwebtoken');

module.exports = {
    createNewPost: (req, res)=> {
        const post = new Post(req.body);
        const decodedJwt = jwt.decode(req.cookies.usertoken, {complete:true});
        post.user_id = decodedJwt.payload.user_id;
        post.username = decodedJwt.payload.username;
        Post.create(post)
        .then((newPost) => res.json(newPost))
        .catch((err)=> {
            console.log('create post failed');
            res.status(400).json(err)
        })
    }
}