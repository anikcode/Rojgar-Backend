const express = require("express");
const mysql = require("mysql2/promise");
const port = process.env.PORT || 5001;

// Create Connection Pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql", // Specify the database you want to connect to
  connectionLimit: 10, // Adjust the limit as per your requirements
});

const app = express();

app.get("/createdDb", (req, res) => {
  // You can use the pool to execute queries
  pool.query("CREATE DATABASE IF NOT EXISTS nodemysql", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Database creation failed");
    } else {
      res.send("Database Created");
    }
  });
});

module.exports = pool;
