const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

const UserModel = require("./models/User");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL;

app.use(bodyParser.json()); // For parsing JSON bodies

app.use(cors());

//connect to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 2);

  const user = new UserModel({ username, password: hashedPassword });

  try {
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while registering the user" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.get("/api/protected", (req, res) => {
  res.json({ message: "Protected resource accessed successfully!!" });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
