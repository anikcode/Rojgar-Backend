const jwt = require("jsonwebtoken");
const SECRET_KEY = "aniket@9430";
const logger = require("../logger");

exports.authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    logger.debug(token, "[token hai ye toh]");
    if (token) {
      //   token = token.split(" ")[1];
      logger.debug(token, "[token hai ye toh phri se]");
      let user = jwt.verify(token, SECRET_KEY);
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized User" });
  }
};
