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
    "[profile deatils]"
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
