const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const secretKey = "aniket@9430";
const db = require("../model/db");
const logger = require("../logger");
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
    await db.onboardUserToPortal(name, password, phone, email);
    res.set({
      "Access-Control-Allow-Origin": "*",
    });
    res.json({
      message: "success",
    });
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
