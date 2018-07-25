const express = require('express');
const router  = express.Router();
const Post    = require('../models/post');

/* GET home page. */
router.get('/', (req, res, next) => {
  Post.find({}, null, { sort: '-createdAt'}, (err, posts) => {

    res.render('index', { posts, user: req.user });
    console.log(posts)
  });
});

module.exports = router;
