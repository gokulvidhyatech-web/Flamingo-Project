const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Gokul@1512#",
  database: "flamingo_crm",
});

module.exports = pool;