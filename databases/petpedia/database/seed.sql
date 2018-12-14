DROP DATABASE IF EXISTS petpedia;
CREATE DATABASE petpedia;

-- \c => connecting to postgres
\c petpedia;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE pets(
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES users(id),
  species VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  age INT
);

INSERT INTO users(username, email) VALUES
  ('moi', 'moi@gmail.com'), ('moi2', 'moi2@gmail.com');

INSERT INTO pets(owner_id, species, name, age) VALUES
  (1, 'cat', 'kitty', '3'), (2, 'dog', 'pup-pup', '5');
