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

exports.getCareerDetail = () => {
  const getQuery = "select * from rojgar.employees_career";
  return pool.query(getQuery);
};

exports.getProjectDetail = () => {
  const getQuery = "select * from rojgar.employees_projects";
  return pool.query(getQuery);
};

exports.getEducationDetails = () => {
  const getQuery = "select * from rojgar.employees_education";
  return pool.query(getQuery);
};

exports.saveCareerDetails = (
  id,
  company,
  employmentType,
  totalExperience,
  name,
  designation,
  joiningDate,
  workedTill,
  jobDescription,
  isEdit
) => {
  logger.debug(
    {
      id,
      company,
      employmentType,
      totalExperience,
      name,
      designation,
      joiningDate,
      workedTill,
      jobDescription,
      isEdit,
    },
    "[save career details in db]"
  );
  if (isEdit == "edit") {
    const getQuery =
      "update rojgar.employees_career set company = ?, employment_type=?, total_experience=?, name=?, designation=?,joining_date=?, worked_till=?, job_description=? where id=?";
    return pool.query(getQuery, [
      company,
      employmentType,
      totalExperience,
      name,
      designation,
      joiningDate,
      workedTill,
      jobDescription,
      id,
    ]);
  } else {
    const getQuery =
      "insert into rojgar.employees_career (company,employment_type ,total_experience ,name,designation,joining_date ,worked_till, job_description) values(?,?,?,?,?,?,?,?)";
    return pool.query(getQuery, [
      company,
      employmentType,
      totalExperience,
      name,
      designation,
      joiningDate,
      workedTill,
      jobDescription,
    ]);
  }
};

exports.saveProjectDetails = (
  id,
  title,
  description,
  joiningDate,
  workedTill,
  isEdit
) => {
  logger.debug(
    {
      id,
      title,
      joiningDate,
      workedTill,
      description,
      isEdit,
    },
    "[save career details in db]"
  );
  if (isEdit == "edit") {
    const getQuery =
      "update rojgar.employees_projects set title = ?,project_description=?, start_date=?, end_date=? where id=?";
    return pool.query(getQuery, [
      title,
      description,
      joiningDate,
      workedTill,
      id,
    ]);
  } else {
    const getQuery =
      "insert into rojgar.employees_projects (title,project_description,start_date ,end_date) values(?,?,?,?)";
    return pool.query(getQuery, [title, description, joiningDate, workedTill]);
  }
};

exports.saveEducationDetails = (
  id,
  schoolName,
  degreeName,
  joiningDate,
  workedTill,
  grade,
  description,
  isEdit
) => {
  logger.debug(
    {
      id,
      schoolName,
      degreeName,
      joiningDate,
      workedTill,
      grade,
      description,
      isEdit,
    },
    "[save education details in db]"
  );
  if (isEdit == "edit") {
    const getQuery =
      "update rojgar.employees_education set school = ?,degree=?,start_date=?, end_date=?,grade=?,description=? where id=?";
    return pool.query(getQuery, [
      schoolName,
      degreeName,
      joiningDate,
      workedTill,
      grade,
      description,
      id,
    ]);
  } else {
    const getQuery =
      "insert into rojgar.employees_education (school,degree,start_date ,end_date,grade,description) values(?,?,?,?,?,?)";
    return pool.query(getQuery, [
      schoolName,
      degreeName,
      joiningDate,
      workedTill,
      grade,
      description,
    ]);
  }
};

exports.deleteEmploymentDetails = (id) => {
  logger.debug({ id }, "[deleting id from db]");
  const getQuery = "delete from rojgar.employees_career where id = ?";
  return pool.query(getQuery, [id]);
};

exports.deleteProjectDetails = (id) => {
  logger.debug({ id }, "[deleting id from db]");
  const getQuery = "delete from rojgar.employees_projects where id = ?";
  return pool.query(getQuery, [id]);
};

exports.deleteEducationDetails = (id) => {
  logger.debug({ id }, "[deleting id from db]");
  const getQuery = "delete from rojgar.employees_education where id = ?";
  return pool.query(getQuery, [id]);
};
