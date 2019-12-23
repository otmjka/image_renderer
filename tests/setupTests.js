import mysql from 'mysql2/promise';
import config from '../src/config';

export default async function setupTests() {
  // sequelize fails if database doesn't exist
  const connection = await mysql.createConnection({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database.name}`);
  await connection.close();
}
