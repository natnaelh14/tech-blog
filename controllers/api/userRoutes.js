const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// Added comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
    try {
      // we search the DB for a user with the provided username
      const userData = await User.findOne({ where: { username: req.body.username } });
      if (!userData) {
        // the error message shouldn't specify if the login failed because of wrong email or password
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
      }
      // use `bcrypt.compare()` to compare the provided password and the hashed password
      const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      // if they do not match, return error message
      if (!validPassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
    // if they do match, return success message
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/signup', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;
  
        res.json(newUser);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});


module.exports = router;