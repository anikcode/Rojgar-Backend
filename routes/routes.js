const express = require("express");
const router = express.Router();
const path = require("path");

const homepageController = require("../controllers/homepage");
const authController = require("../auth");

router.get("/", homepageController.requestToGetData);
router.post("/login", authController.requestToLogin);

module.exports = router;
