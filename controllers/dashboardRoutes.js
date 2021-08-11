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
