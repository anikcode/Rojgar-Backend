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
exports.saveProfileDetails = (
  dob,
  name,
  gender,
  careerBreak,
  address,
  isEdit,
  userId
) => {
  logger.debug(
    { dob, name, gender, careerBreak, address, isEdit, userId },
    "[profile details in db]"
  );
  if (isEdit == "edit") {
    const getQuery =
      "update rojgar.employees_profile set dob = ?, name=?, gender=?, career_break=?, address=? where id=?";
    return pool.query(getQuery, [
      dob,
      name,
      gender,
      careerBreak,
      address,
      userId,
    ]);
  } else {
    const getQuery =
      "insert into rojgar.employees_profile(dob, name, gender, career_break, address) values(?,?,?,?,?)";
    return pool.query(getQuery, [dob, name, gender, careerBreak, address]);
  }
};

exports.getProfileDetail = () => {
  const getQuery = "select * from rojgar.employees_profile";
  return pool.query(getQuery);
};
