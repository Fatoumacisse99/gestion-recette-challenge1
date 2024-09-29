/* eslint-disable */
// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 2,
  queueLimit: 0,
  port: process.env.DB_PORT,
});

db.getConnection()
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch((err) => console.error("Erreur de connexion :", err));

export default db;
