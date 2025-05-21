const express = require('express');
const router = express.Router();

// TODO: add auth routes
router.post('/login', (req, res) => {
  res.send('login');
});

module.exports = router;
