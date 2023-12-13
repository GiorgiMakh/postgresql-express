const { Pool } = require('pg');
require("dotenv").config();

// Create a PostgreSQL pool for database connections
exports.pool = new Pool({
    user: process.env.DBUSER || 'postgres',
    host: process.env.DBHOST || 'localhost',
    database: process.env.DBDATABASE || 'postgres',
    password: process.env.DBPASSWORD || '123',
    port: process.env.DBPORT || 5432,
  });

// Create Middleware for Express
exports.PostgreSQL = (req, res, next) => {
    req.pool = exports.pool;
    next();
}