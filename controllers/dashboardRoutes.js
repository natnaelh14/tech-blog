const router = require('express').Router();
const { Blog } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Blog.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
