const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app, just to Display. How it's Looking? Comment Please!");
});

app.get("/me", (req, res) => {
  res.send("This is Azizul maqsud");
});

app.listen(5000, () => {
  console.log("listening");
});