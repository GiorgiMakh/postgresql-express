const express = require('express');
const router = express.Router();

// Route to fetch data from the database
router.get('/users', async (req, res) => {
    try {
      const result = await req.pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({message:'Internal Server Error'});
    }
  });
  
// Route to insert data into the database
router.post('/users', async (req, res) => {
    const { name, lastname } = req.body;
  
    if (!name || !lastname) {
      return res.status(401).send('Name and lastname are required');
    }
  
    try {
      const result = await req.pool.query('INSERT INTO users (name, lastname) VALUES ($1, $2) RETURNING *', [name, lastname]);
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({message:'Internal Server Error'});
    }
  });  

module.exports = router;