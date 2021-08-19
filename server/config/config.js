require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
  test: {
    dialect: 'sqlite',
    storage: 'database.sqlite3'
  },
  production: {
    username: process.env.DB_USER_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    port: process.env.DB_PORT_PRODUCTION,
    dialect: 'mysql'
  }
};
