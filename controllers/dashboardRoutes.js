const router = require('express').Router();
const { Blog } = require('../models/');
const auth = require('../utils/auth');

router.get('/', auth, async (req, res) => {
  try {
    const postData = await Blog.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepageloggedin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', auth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/update/:id', auth, async (req, res) => {
  try {
    const postData = await Blog.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
