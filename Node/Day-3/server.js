const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // For parsing JSON bodies

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

app.get("/getItems", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  if (!newItem.id || !newItem.name) {
    return res.status(500).send("Item must have an id and name!");
  }

  items.push(newItem);
  res.status(201).send(`Items added with ID: ${newItem.id}`);
});

app.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const index = items.findIndex((item) => item.id === itemId);
  if (index === -1) {
    return res.status(400).send("Item not found");
  }

  if (!updatedItem.name) {
    return res.status(500).send("Item must have a name!");
  }

  items[index].name = updatedItem.name;
  res.status(201).send(`Items updated with ID: ${itemId}`);
});

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const index = items.findIndex((item) => item.id === itemId);
  if (index === -1) {
    return res.status(400).send("Item not found");
  }

  items.splice(index, 1);
  res.status(201).send(`Items deleted with ID: ${itemId}`);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
