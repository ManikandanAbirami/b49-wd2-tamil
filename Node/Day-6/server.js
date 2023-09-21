const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

const outputFolder = "./output"; //Folder name where files will be stored

//To check whether folder is alreadt there, if not create a new folder
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Log each request

function logRequest(req, res, next) {
  const currentTime = new Date();
  const year = currentTime.getFullYear().toString();
  const month = (currentTime.getMonth() + 1).toString();
  const date = currentTime.getDate().toString();
  const hrs = currentTime.getHours().toString();
  const mins = currentTime.getMinutes().toString();
  const secs = currentTime.getSeconds().toString();

  const dateTimeForFileName = `${year}-${month}-${date}-${hrs}-${mins}-${secs}.txt`;

  const filePath = path.join(outputFolder, dateTimeForFileName);

  fs.writeFile(
    filePath,
    `Received ${req.method} request for ${
      req.url
    } at ${new Date().toISOString()}`,
    (err) => {
      if (err) {
        console.log(`Error creating file: ${err}`);
        return;
      }

      console.log(`File created successfully at: ${filePath}`);
    }
  );
  next();
}

// Sample Authentication

function sampleAuthentication(req, res, next) {
  if (req.query.token === "mentorToken") {
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
