const db = require("../model/db");
exports.requestToGetData = async (req, res) => {
  try {
    const result = await db.getDataFromDb();
    res.json({
      message: "success",
      data: result[0],
    });
  } catch (err) {
    res.json({
      message: err,
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
