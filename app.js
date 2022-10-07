const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const port = 3000;

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, function () {
  console.log("Server started at port 3000");
});
