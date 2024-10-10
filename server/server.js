require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5001;
const userRoutes = require("./router/userRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
const authRoutes = require("./router/authRoutes");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

console.log("DB", process.env.MONGO_DB_URL);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log("DB Error", err.message);
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// app.use(requireAuth);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
