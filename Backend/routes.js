const express = require('express');
const router = express.Router();
const db = require('./database');

// Example route
router.get('/users', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_details;');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
