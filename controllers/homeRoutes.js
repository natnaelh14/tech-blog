const router = require("express").Router();
const { Blog, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {
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
    const commentData = await Comment.findAll({
      where: {
        user_iden: req.session.user_id,
      },
    });
    const posts = await postData.map((post) => post.get({ plain: true }));
    const user = await userData.get({ plain: true });
    const comments =
     commentData.length > 0
      ? commentData.map((comment) => comment.get({ plain: true }))
      : null;
    console.log(user)
    res.render("homepage", {
      posts,
      user,
      comments,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
