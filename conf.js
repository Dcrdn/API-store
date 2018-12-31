const Pool = require('pg').Pool;
const pool = new Pool({
  user: '', //your user in your postgres db
  host: 'localhost',
  database: 'store',
  password: '', //the password you have in your postgres db
  port: 5432, //the port you have your postgres db running on
});

module.exports = {
    pool,
  }