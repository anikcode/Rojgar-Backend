const pool = require("../model/db-connection");
const logger = require("../logger");

exports.getDataFromDb = () => {
  const getQuery = "select * from nodemysql.users";
  return pool.query(getQuery);
};

exports.onboardUserToPortal = (name, password, phone, email) => {
  logger.debug({ name, password, phone, email }, "[register data]");
  const getQuery =
    "insert into rojgar.users(name, password, phone, email) values(?,?,?,?)";
  return pool.query(getQuery, [name, password, phone, email]);
};

exports.verifyUserToLogin = (email, password) => {
  logger.info({ email, password }, "[verifyUserToLogin]");
  const getQuery =
    "select id from rojgar.users where email = ? and password = ?";
  return pool.query(getQuery, [email, password]);
};
