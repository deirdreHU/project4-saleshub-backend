const { Client } = require('pg')
const { Sequelize } = require('sequelize');

const getSequelize = () => {
  return new Sequelize(`postgres://deirdrehu:97378261@localhost:5432/saleshub`);
}

const getConnection = async () => {
  const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT
  })
  await client.connect()
  return client;
}
module.exports = {
  getConnection,
  getSequelize
}
