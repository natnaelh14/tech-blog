const router = require('express').Router();
const Blog = require('../../models/User');
const withAuth = require('../../utils/auth');


router.get('/new-post', withAuth, (req, res) => {
    res.render('new-post');
  });
  router.post('/new-post'), async (req, res) => {
    try {
      await Blog.create({
      title: req.session.title,
      content: req.session.content,
      user_id: req.session.user_id,
      });
    res.redirect('/');
    } catch {
      alert('unable to save new post')
      res.status(500).json(err);
    }  
  }

  router.get('/update/:id', withAuth, async (req, res) => {
    try {
      const postData = await Blog.findByPk(req.params.id);
      if (postData) {
        const post = postData.get({ plain: true });
        res.render('edit-post', {
          post,
          logged_in: true,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });

  module.exports = router;