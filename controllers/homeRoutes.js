const router = require("express").Router();
const { Blog, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {
  try {

    const postData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    console.log('hello')
    const userData = await User.findAll({
      where: {
        id: req.session.user_id,
      },
    });
    const posts = await postData.map((post) => post.get({ plain: true }));
    console.log(posts)
    // const user = await userData.get({ plain: true });
    // console.log(user)
    res.render("homepage", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
