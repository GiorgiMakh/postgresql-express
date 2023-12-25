const { pool } = require('../db/db.js');

// Example query to create a table if not exists
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255)
  )
`;

// Example query to insert data into the table
const insertDataQuery = `
  INSERT INTO users (name, lastname) VALUES
  ('John', 'Doe'),
  ('Alice', 'Smith')
`;

// Use the pool to send the create table query
pool.query(createTableQuery, (createTableError, createTableResult) => {
  if (createTableError) {
    console.error('Error creating table:', createTableError);
    pool.end();
  } else {

    // Use the pool to send the insert data query
    pool.query(insertDataQuery, (insertDataError, insertDataResult) => {
      if (insertDataError) {
        console.error('Error inserting data:', insertDataError);
      } else {
        console.log('Data inserted successfully!');
      }

      // Close the pool (optional, depends on your application's lifecycle)
      pool.end();
    });
  }
});

