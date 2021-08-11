const router = require("express").Router();
const { Blog, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/newpost", withAuth, async (req, res) => {
  const userData = await User.findOne({
    where: {
      id: req.session.user_id,
    },
  });
  const user = userData.get({ plain: true });
  res.render("newpost", { user, logged_in: true });
});

router.post("/newpost", withAuth, async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.redirect("/");
  } catch {
    alert("unable to save new post");
    res.status(500).json(err);
  }
});

router.post("/comment", withAuth, async (req, res) => {
  try {
    await Comment.create({
      comment: req.body.comment,
      blog_id: req.body.blogId,
      user_iden: req.session.user_id,
    });
    res.redirect("/");
  } catch {
    alert("unable to save new post");
    res.status(500).json(err);
  }
});

module.exports = router;
