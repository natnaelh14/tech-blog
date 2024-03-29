const router = require("express").Router();
const { Blog, User, Comment } = require("../models/");
const withAuth = require("../utils/auth");

//route directs to new post page.
router.get("/newpost", withAuth, async (req, res) => {
  const userData = await User.findOne({
    where: {
      id: req.session.user_id,
    },
  });
  const user = userData.get({ plain: true });
  res.render("newpost", { user, logged_in: true });
});
//route creates a new blog post in database
router.post("/newpost", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    let username = userData.username
    await Blog.create({
      title: req.body.title,
      content: req.body.content,
      username: username,
      user_id: req.session.user_id,
    });
    res.redirect("/");
  } catch {
    alert("unable to save new post");
    res.status(500).json(err);
  }
});
//route creates a new comment in database
router.post("/comment", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: {
        id: req.body.blogId,
      },
    });
    const userData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
    });
    let blogName = blogData.title;
    let username = userData.username
    await Comment.create({
      comment: req.body.comment,
      blog_id: req.body.blogId,
      username: username,
      blogName: blogName,
    });
    res.redirect("/");
  } catch {
    alert("unable to save new post");
    res.status(500).json(err);
  }
});

module.exports = router;
