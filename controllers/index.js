const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const homeRoutes = require('./homeRoutes.js');
const blogRoutes = require('./blogRoutes.js');


router.use('/', homeRoutes);
router.use('/', userRoutes);
router.use('/', blogRoutes)

module.exports = router;