const db = require("../model/db-connection");
exports.requestToGetData = (req, res) => {
  res.status(200).json({
    message: "It works!",
  });
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database Created");
  });
};
