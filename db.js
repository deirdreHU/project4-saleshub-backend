const { Client } = require('pg')
const { Sequelize } = require('sequelize');

const getSequelize = () => {
  return new Sequelize(`postgres://mqzupfui:UrwfvWGVZjQ1uO5heWhBPWyb1FOJOsoJ@tiny.db.elephantsql.com/mqzupfui`);
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
