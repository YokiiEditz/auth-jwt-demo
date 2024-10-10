const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPwsd = await bcrypt.hashSync(password, 10);

    const data = {
      email,
      password: hashedPwsd,
    };

    const newUser = await User.create(data);
    if (!newUser) {
      console.log("User not created due to issues");
    }

    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(404).json({ msg: "Register Error!" + error.message });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log("user data", email, password);

  try {
    const findUser = await User.findOne({ email });
    const compared = await bcrypt.compareSync(password, findUser.password);

    if (!findUser || !compared) console.log("Wrong credentials");

    const { password: hash, ...restValues } = findUser._doc;
    if (compared) {
      await jwt.sign(
        { restValues },
        process.env.ACCESS_TOKEN,
        {},
        (err, token) => {
          if (err) throw err;

          res.status(200).json({ email, token });
          // res
          //   .cookie("access_token", token, {
          //     httpOnly: true,
          //   })
          //   .json({ status: "ok", token });
        }
      );
    }
  } catch (error) {
    res.status(404).json({ msg: "Login Error!" + error.message });
  }
};

//login
const profile = async (req, res) => {
  res.status(200).json({ msg: "User profile" });
};

module.exports = { register, login, profile };
