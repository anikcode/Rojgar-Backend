const express = require("express");
const router = express.Router();
const path = require("path");

const homepageController = require("../controllers/homepage");

router.get("/", homepageController.requestToGetData);

module.exports = router;
