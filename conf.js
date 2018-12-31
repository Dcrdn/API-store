const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres', //your user in your postgres db
  host: 'localhost',
  database: 'store',
  password: 'holkeano10x10', //the password you have in your postgres db
  port: 5432,
});

module.exports = {
    pool,
  }