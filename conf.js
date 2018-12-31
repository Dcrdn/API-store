//psql -Upostgres

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'store',
  password: 'holkeano10x10',
  port: 5432,
});

module.exports = {
    pool,
  }

  /*
SCRIPTS

CREATE DATABASE store;

CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  price FLOAT
);

INSERT INTO products (name, price)
  VALUES ('PANTS', '5'),('TSHIRT', '20'),('HAT', '7.5')


  */