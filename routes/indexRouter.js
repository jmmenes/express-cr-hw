const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "Welcome to my App",
  });
});

module.exports = router;
