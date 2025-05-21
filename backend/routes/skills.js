const express = require('express');
const router = express.Router();

// In-memory skills for demo purposes
const skills = [
  {
    id: 1,
    title: 'How to juggle',
    description: 'Learn juggling in 10 minutes',
    price: 0,
    duration: 10,
    tags: ['juggling', 'fun'],
  },
];

// List skills
router.get('/', (req, res) => {
  res.json(skills);
});

// Create a new skill
router.post('/', (req, res) => {
  const skill = { id: skills.length + 1, ...req.body };
  skills.push(skill);
  res.status(201).json(skill);
});

module.exports = router;
