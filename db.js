const { Client } = require('pg')
const { Sequelize } = require('sequelize');

let sequelizeConn;

const getSequelize = () => {
  if(!sequelizeConn)
    {
      sequelizeConn = new Sequelize(`postgres://mqzupfui:mDjniZh_IhTvyRDz2XJbfvYwo_xjrI6g@tiny.db.elephantsql.com/mqzupfui`);
    }
  return sequelizeConn;
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
