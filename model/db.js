const db = require("../model/db-connection");

exports.getDataFromDb = () => {
  const getQuery = "insert into nodemysql.users(id) values (4)";
  return db.query(getQuery);
};
