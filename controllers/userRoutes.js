const router = require('express').Router();
const User = require('../models/User');

//route directs to login page
router.get("/login", (req, res) => {
  if (req.session && req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
//Log in the application after username and password verification
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
      }
      const validPassword = await userData.validPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
//route directs to signup page
  router.get("/signup", (req, res) => {
    if (req.session && req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signup");
  });
  //Create New User 
  router.post('/signup', async (req, res) => {
    try {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
      });
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        res.json({ user: newUser, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
//Log out and delete session data
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;