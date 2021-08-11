const router = require('express').Router();
const { Blog, User } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    const user = userData.get({ plain: true });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      user,
      logged_in: true,
    });
  } catch (err) {
    res.redirect('login');
  }
});

 router.put('/update/', withAuth, async (req, res) => {
    try {
      Blog.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.body.updateId,
          },
        }
      )
      res.render('dashboard');
    } catch (err) {
      res.redirect('login');
    }
  });

  router.delete('/delete', withAuth, async (req, res) => {
    try {
      Blog.destroy({
        where: {
          id: req.body.deleteId,
        },
      });
      res.status(200).end();
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
