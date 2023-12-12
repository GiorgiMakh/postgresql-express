const express = require('express');
const router = express.Router();

// Route to fetch data from the database
router.get('/users', async (req, res) => {
    try {
      const result = await req.pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// Route to insert data into the database
router.post('/users', async (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).send('Name and email are required');
    }
  
    try {
      const result = await req.pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });  

module.exports = router;