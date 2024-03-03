CREATE DATABASE IF NOT EXISTS postgres;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  lastname VARCHAR(255)
);

INSERT INTO users (name, lastname) VALUES
('John', 'Doe'),
('Alice', 'Smith');
