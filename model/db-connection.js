const express = require("express");
const mysql = require("mysql2");
const port = process.env.port || 9001;

let wrapper = {};
//Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

//Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected");
});

const app2 = express();
// app2.get("/createdDb", (req, res) => {
//   let sql = "CREATE DATABASE nodemysql";
//   db.query(sql, (err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("Database Created");
//   });
// });
// app2.listen(port);

const pool = mysql.createPool(db, (err) => {
  if (err) {
    throw err;
  }
  res.send("Database Created");
});
module.exports = db;
