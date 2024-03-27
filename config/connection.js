require("dotenv").config();
const Sequelize = require("sequelize");
const url = require('url');

const dbUrl = process.env.CLEARDB_DATABASE_URL;
const parsedUrl = url.parse(dbUrl);
const [username, password] = parsedUrl.auth.split(':');

const sequelize = new Sequelize(parsedUrl.pathname.slice(1), username, password, {
  host: parsedUrl.hostname,
  dialect: 'mysql',
  port: parsedUrl.port || 3306,
});

module.exports = sequelize;
