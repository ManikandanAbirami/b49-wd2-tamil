const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
// Log each request
function logRequest(req, res, next) {
  console.log(
    `Received ${req.method} request for ${
      req.url
    } at ${new Date().toISOString()}`
  );
  next();
}
// Sample Authentication
function sampleAuthentication(req, res, next) {
  if (req.query.token === process.env.MENTOR_TOKEN) {
    req.user = { id: 1, name: "Manikandan Anbalagan" };
    next();
  } else if (req.query.token === "studentToken") {
    req.user = { id: 2, name: "John G" };
    next();
  } else {
    res.status(401).send("Unauthorized!!!");
  }
}
app.use(bodyParser.json()); // For parsing JSON bodies
app.use("/secure", sampleAuthentication);
app.use(logRequest);
app.get("/secure/profile", (req, res) => {
  res.send(`Hello, ${req.user.name}`);
});
app.get("/mentor", (req, res) => {
  res.send(`Hello, Mentor!!!!!`);
});
app.get("/student", (req, res) => {
  res.send(`Hello, student`);
});
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
