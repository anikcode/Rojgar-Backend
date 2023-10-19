const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");

router.use(express.json());
router.use(cors());
const homepageController = require("../controllers/homepage");
const authController = require("../controllers/auth");

router.get("/", homepageController.requestToGetData);
router.post("/register", authController.requestToRegister);
router.post("/login", authController.requestToLogin);
router.post("/save-profile-details", homepageController.saveProfileDetails);
router.get("/get-profile-details", homepageController.getProfileDetails);

module.exports = router;
