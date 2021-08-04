const router = require('express').Router();
const User = require('../models/User');

router.get("/login", (req, res) => {
  if (req.session && req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

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

  router.get("/signup", (req, res) => {
    if (req.session && req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signup");
  });
  
  router.post('/signup', async (req, res) => {
    try {
      const newUser = await User.create({
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