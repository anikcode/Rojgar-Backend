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
router.post("/save-career-details", homepageController.saveCareerDetails);
router.post("/save-project-details", homepageController.saveProjectDetails);
router.get("/get-career-details", homepageController.getCareerDetails);
router.get("/get-project-details", homepageController.getProjectDetails);
router.post(
  "/delete-career-details",
  homepageController.deleteEmploymentDetails
);
router.post("/delete-project-details", homepageController.deleteProjectDetails);

module.exports = router;
