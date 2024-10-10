const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify AUTH
  const { authorization } = await req.headers;
  // console.log("authors", authorization);

  if (!authorization) {
    // res.status(401).json({ error: "token required" });
    console.log("token required");
  }

  const token = await authorization.split(" ")[1];
  // console.log("token from client", token);

  try {
    const { _id } = await jwt.verify(token, process.env.ACCESS_TOKEN);

    const dbUser = await User.findOne({ _id });
    // console.log("DB-user", dbUser);

    // req.user = dbUser;
    req.userdata = dbUser; //send data to every logined request-path
    next();
  } catch (error) {
    res.status(401).json({ error: `UR are un-authorized! + ${error.message}` });
  }
};

// const requireAuth = async (req, res, next) => {
//   //verify AUTH
//   const { access_token } = await req.cookies;
//   console.log("token", access_token);

//   if (!access_token) {
//     console.log("token required");
//   }

//   try {
//     const user = await jwt.verify(access_token, process.env.ACCESS_TOKEN);

//     console.log("user", user);
//     next();
//   } catch (error) {
//     res.status(401).json({ error: `UR are un-authorized! + ${error.message}` });
//   }
// };

module.exports = requireAuth;
