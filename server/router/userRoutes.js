const express = require("express");
const router = express.Router();

const { register, login, profile } = require("../controllers/userControllers");

//sign-up
router.post("/signup", register);

//login
router.post("/login", login);

//profile
router.post("/profile", profile);

module.exports = router;
