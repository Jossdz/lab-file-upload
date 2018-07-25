const express    = require('express')
const Post       = require('../models/post')
const multer     = require('multer')
const upload     = multer({ dest: 'public/uploads/post-pictures' })
const router     = express.Router()
const { ensureLoggedIn } = require('connect-ensure-login')

router.get('/new', ensureLoggedIn('/login'), (req, res) => {
  res.render('posts/new', { user: req.user })
})

router.post('/',
  [ ensureLoggedIn('/login'), upload.single('post-picture')],
  (req, res, next) => {

  const { file } = req
  const { content } = req.body

  const newPost = new Post({
    content,
    _creatorId: req.user._id,
    creatorPic: req.user.picPath,
    creatorName: req.user.username,
    picPath: `/uploads/post-pictures/${file.filename}`,
    picName: file.originalname,
  })

  newPost.save( (err) => {
    if (err) { return next(err) }
    req.user.posts.push(newPost)
    req.user.save( err => {
      if (err) { return next(err) }
      return res.redirect('/')
    })   
  })
  res.redirect('/');
})

  router.get('/:id', (req, res, next) => {
    Post.findById(req.params.id, (err, post) => {
      res.render('posts/show', { post, user: req.user })
    })
  })
  
  module.exports = router
  