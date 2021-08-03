const router = require('express').Router();
const blogRoutes = require('./blogRoutes.js');


router.use('/blogs', blogRoutes)

module.exports = router;