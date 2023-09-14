// Import the express library
const express = require("express");

// Create new express application
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from Express!!!");
});

// Define a route for the homepage
app.get("/home", (req, res) => {
  res.send("Hello from Home page!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
