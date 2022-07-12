const router = require('express').Router();

// expand when new routes are added to /controllers
const apiRoutes = require('./api');
const htmlRoutes = require('./home-routes')

// expand when new routes are added to /controllers
router.use('/api', apiRoutes);
router.use('/', htmlRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;