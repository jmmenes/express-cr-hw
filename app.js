const express = require("express");
const logger = require("morgan");
const path = require("path");

// server start
const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));

app.set("views engine", "ejs");

// start express server
// app.listen(3000, function () {
//   console.log("Server started in port 3000");
// });

modules.export = app;
