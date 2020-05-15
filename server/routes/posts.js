const express = require('express');
const router = express.Router();

const PostsCtrl = require('../controllers/posts');
const AuthCtrl = require('../controllers/auth')

router.post('', AuthCtrl.onlyAuthUser, PostsCtrl.createPost);

router.get('', PostsCtrl.getPosts);

module.exports = router;
