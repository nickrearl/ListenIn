const router = require('express').Router();

// expand when new routes are added to /controllers
const apiRoutes = require('./api');

// expand when new routes are added to /controllers
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;