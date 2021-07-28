const router = require('express').Router();
const { Blog, User } = require('../models/');

// get all posts for homepage
router.get('/', auth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [User],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepageloggedin', { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;