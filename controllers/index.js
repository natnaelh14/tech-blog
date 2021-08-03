const router = require('express').Router();
const apiRoutes = require('./api/');
const userRoutes = require('./userRoutes.js');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', userRoutes);


module.exports = router;