const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = {
      email,
      password,
    };

    const newUser = await User.create(userData);
    if (!newUser) {
      console.log("User not created");
      res.status(404).json({ message: "User not created" });
    } else {
      console.log("User created");
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(404).json({ msg: "Register Error!" + error.message });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUser = await User.findOne({ email, password });
    const { _id } = findUser;

    if (findUser) {
      const token = await jwt.sign({ _id }, process.env.ACCESS_TOKEN);
      res.cookie("access_token", token).json({ status: "ok", userData: token });
    } else {
      res.status(404).json({ message: "Wrong credentials" });
    }
  } catch (error) {
    res.status(404).json({ msg: "Login Error!" + error.message });
  }
};

//login

module.exports = { register, login };
