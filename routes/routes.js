const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const auth = require("../middleware/auth");
const limiter = require("express-rate-limit");

const loginLimiter = limiter({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  handler: (req, res) => {
    console.log(req.ratelimit);
    res.status(429).json({
      message: "failure",
      payload: "too many failed attempts",
    });
  },
});

router.use(express.json());
router.use(cors());
const homepageController = require("../controllers/homepage");
const authController = require("../controllers/auth");

router.get("/", homepageController.requestToGetData);
router.post("/register", authController.requestToRegister);
router.post("/login", loginLimiter, authController.requestToLogin);
router.post(
  "/save-profile-details",
  auth.authenticate,
  homepageController.saveProfileDetails
);
router.get(
  "/get-profile-details",
  auth.authenticate,
  homepageController.getProfileDetails
);
router.post(
  "/save-career-details",
  auth.authenticate,
  homepageController.saveCareerDetails
);
router.post(
  "/save-project-details",
  auth.authenticate,
  homepageController.saveProjectDetails
);
router.get(
  "/get-career-details",
  auth.authenticate,
  homepageController.getCareerDetails
);
router.get(
  "/get-project-details",
  auth.authenticate,
  homepageController.getProjectDetails
);
router.post(
  "/delete-career-details",
  auth.authenticate,
  homepageController.deleteEmploymentDetails
);
router.post(
  "/delete-project-details",
  auth.authenticate,
  homepageController.deleteProjectDetails
);
router.post(
  "/delete-education-details",
  auth.authenticate,
  homepageController.deleteEducationDetails
);
router.get(
  "/get-education-details",
  auth.authenticate,
  homepageController.getEducationDetails
);
router.post(
  "/save-education-details",
  auth.authenticate,
  homepageController.saveEducationDetails
);
module.exports = router;
