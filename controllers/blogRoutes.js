const router = require('express').Router();
const Blog = require('../models/Blog');
const withAuth = require('../utils/auth');

router.get('/newpost', withAuth, (req, res) => {
    res.render('newpost', {logged_in: true});
  });
router.post('/newpost', withAuth, async (req, res) => {
    try {
      console.log('AWWWWWWEEEEEEEEEWWWWWWWWWW')
      await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
      });
      res.redirect('/');
    } catch {
      alert('unable to save new post')
      res.status(500).json(err);
    }  
  });

  module.exports = router;