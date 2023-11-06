const db = require("../model/db");
const logger = require("../logger");
exports.requestToGetData = async (req, res) => {
  try {
    logger.info.msg("hello");
    const result = await db.getDataFromDb();
    // res.json({
    //   message: "success",
    //   data: result[0],
    if (result[0]) {
      const err = new Error("Lo aa gya error backend se");
      throw err;
    }
    // });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Errorrrrr",
    });
  }

  // Promise.all([db.getDataFromDb()])
  //   .then(([result]) => {
  //     return res.status(200).json({
  //       message: "It works!",
  //       data: result[0],
  //     });
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({
  //       message: "failure",
  //       errorMessage: err.message || "Something went wrong",
  //     });
  //   });

  // let sql = "CREATE DATABASE nodemysql";
  // db.query(sql, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   res.send("Database Created");
  // });
};

exports.saveProfileDetails = async (req, res) => {
  const dob = req.body.dob;
  const name = req.body.name;
  const gender = req.body.gender;
  const careerBreak = req.body.careerBreak;
  const address = req.body.address;
  const isEdit = req.body.isEdit;
  const userId = req.body.userId;
  logger.debug(
    { dob, name, gender, careerBreak, address, userId },
    "[profile details]"
  );
  try {
    await db.saveProfileDetails(
      dob,
      name,
      gender,
      careerBreak,
      address,
      isEdit,
      userId
    );
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.getProfileDetails = async (req, res) => {
  try {
    const response = await db.getProfileDetail();
    logger.debug(response[0]);
    res.json({
      message: "success",
      response: response[0],
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.getCareerDetails = async (req, res) => {
  try {
    const response = await db.getCareerDetail();
    logger.debug(response[0]);
    res.json({
      message: "success",
      response: response[0],
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.getEducationDetails = async (req, res) => {
  try {
    const response = await db.getEducationDetails();
    logger.debug(response[0]);
    res.json({
      message: "success",
      response: response[0],
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.saveCareerDetails = async (req, res) => {
  const id = req.body.id;
  const company = req.body.company;
  const employmentType = req.body.employmentType;
  const totalExperience = req.body.totalExperience;
  const name = req.body.name;
  const designation = req.body.designation;
  const joiningDate = req.body.joiningDate;
  const workedTill = req.body.workedTill;
  const isEdit = req.body.isEdit;
  const jobDescription = req.body.jobDescription;
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
      isEdit,
      jobDescription,
    },
    "[save career details]"
  );
  try {
    await db.saveCareerDetails(
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
    );
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.saveProjectDetails = async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const joiningDate = req.body.joiningDate;
  const workedTill = req.body.workedTill;
  const isEdit = req.body.isEdit;
  logger.debug(
    {
      id,
      title,
      joiningDate,
      workedTill,
      isEdit,
      description,
    },
    "[save project details]"
  );
  try {
    await db.saveProjectDetails(
      id,
      title,
      description,
      joiningDate,
      workedTill,
      isEdit
    );
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.saveEducationDetails = async (req, res) => {
  const id = req.body.id;
  const schoolName = req.body.schoolName;
  const degreeName = req.body.degreeName;
  const description = req.body.description;
  const grade = req.body.grade;
  const joiningDate = req.body.joiningDate;
  const workedTill = req.body.workedTill;
  const isEdit = req.body.isEdit;
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
    "[save project details]"
  );
  try {
    await db.saveEducationDetails(
      id,
      schoolName,
      degreeName,
      joiningDate,
      workedTill,
      grade,
      description,
      isEdit
    );
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.deleteEmploymentDetails = async (req, res) => {
  const id = req.body.id;
  logger.debug({ id }, "[deleting id]");
  try {
    await db.deleteEmploymentDetails(id);
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.deleteProjectDetails = async (req, res) => {
  const id = req.body.id;
  logger.debug({ id }, "[deleting id]");
  try {
    await db.deleteProjectDetails(id);
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.deleteEducationDetails = async (req, res) => {
  const id = req.body.id;
  logger.debug({ id }, "[deleting id]");
  try {
    await db.deleteEducationDetails(id);
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};

exports.getProjectDetails = async (req, res) => {
  try {
    const response = await db.getProjectDetail();
    logger.debug(response[0]);
    res.json({
      message: "success",
      response: response[0],
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Error Occured",
    });
  }
};
