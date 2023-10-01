const pool = require("../model/db-connection");

exports.getDataFromDb = () => {
  const getQuery = "select * from nodemysql.users";
  return pool.query(getQuery);
};
