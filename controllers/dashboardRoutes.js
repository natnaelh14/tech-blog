const router = require('express').Router();
const { Blog } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
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

 // router.get('/update/:id', withAuth, async (req, res) => {
  //   try {
  //     const postData = await Blog.findByPk(req.params.id);
  //     if (postData) {
  //       const post = postData.get({ plain: true });
  //       res.render('edit-post', {
  //         post,
  //         logged_in: true,
  //       });
  //     } else {
  //       res.status(404).end();
  //     }
  //   } catch (err) {
  //     res.redirect('login');
  //   }
  // });

module.exports = router;
