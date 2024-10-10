const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authControllers");

// sign - up;
router.post("/signup", register);

//login
router.post("/login", login);

const Allposts = [
  { title: "snack-shack", author: "king pin" },
  { title: "redemption", author: "johnas" },
];

const requireAuth = require("../middleware/requireAuth");

//posts
router.get("/posts", requireAuth, (req, res) => {
  // console.log("user-data ", req.userdata);
  res.status(200).json(Allposts);
});

module.exports = router;
