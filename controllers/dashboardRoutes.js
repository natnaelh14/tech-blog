const router = require('express').Router();
const { Blog } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
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

  router.delete('/delete', withAuth, async (req, res) => {
    try {
      Blog.destroy({
        where: {
          id: req.body.deleteId,
        },
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
