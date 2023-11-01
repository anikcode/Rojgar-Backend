const jwt = require("jsonwebtoken");
const SECRET_KEY = "aniket@9430";

exports.authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};