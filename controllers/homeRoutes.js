const router = require("express").Router();
const { Blog, User} = require("../models/");
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
    const user = userData.get({ plain: true });
    const posts = await postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
