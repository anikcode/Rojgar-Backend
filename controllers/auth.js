const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "aniket@9430";
const db = require("../model/db");
const logger = require("../logger");
const bcrypt = require("bcrypt");
// const logger = require("../logger");
// exports.requestToLogin = (req, res) => {
//   const user = {
//     id: 1,
//     username: "aniket",
//     email: "aniket.sriwastva@gmail.com",
//   };
//   jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
//     res.json({
//       token,
//     });
//   });
// };

exports.requestToRegister = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  try {
    logger.info({ name, password, phone, email }, "[requestToRegister]");
    const existingUser = await db.verifyUserToLogin(email, password);
    logger.debug(existingUser[0], "[existingUser[0]]");
    if (existingUser[0].length > 0) {
      const err = new Error("User already exist!");
      throw err;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.onboardUserToPortal(name, hashedPassword, phone, email);
    const token = jwt.sign({ email: email }, secretKey);
    res.set({
      "Access-Control-Allow-Origin": "*",
    });
    res.json({
      message: "success",
      token: token,
    });
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Errorrrrr",
    });
  }
};

exports.requestToLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    logger.info({ password, email }, "[requestToLogin]");
    const userDetails = await db.verifyUserToLogin(email, password);
    logger.info(userDetails[0].length, "[User details]");
    if (userDetails[0] && userDetails[0].length == 0) {
      const err = new Error("Email or password is incorrect");
      throw err;
    } else {
      res.set({
        "Access-Control-Allow-Origin": "*",
      });
      res.json({
        message: "success",
      });
    }
  } catch (err) {
    res.json({
      message: "failure",
      errorMessage: err.message || "Errorrrrr",
    });
  }
};

// app.post("/login", (req, res) => {
//   const user = {
//     id: 1,
//     username: "aniket",
//     email: "aniket.sriwastva@gmail.com",
//   };
//   jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
//     res.json({
//       token,
//     });
//   });
// });
// app.post("/profile", verifyToken, (req, res) => {
//   jwt.verify(req.token, secretKey, (err, authData) => {
//     if (err) {
//       res.send({ result: "invalid token" });
//     } else {
//       res.json({
//         message: "profile accessed",
//         authData,
//       });
//     }
//   });
// });

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     req.token = token;
//     next();
//   } else {
//     res.send({
//       result: "Token is not valid",
//     });
//   }
// }
