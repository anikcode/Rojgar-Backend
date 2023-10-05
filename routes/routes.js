const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
// app.use(express.json());
// app.use(cors());
router.use(express.json());
router.use(cors());
const homepageController = require("../controllers/homepage");
const authController = require("../controllers/auth");

router.get("/", homepageController.requestToGetData);
router.post("/register", authController.requestToRegister);

module.exports = router;
