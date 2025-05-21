const express = require('express');
const router = express.Router();

// TODO: add session routes
router.get('/', (req, res) => {
  res.send('sessions');
});

module.exports = router;
