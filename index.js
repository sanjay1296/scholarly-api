"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./src/routes"));

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    return res.status(500).send({
      message: "Internal Error",
      error: err,
    });
  } else return next();
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});

module.exports = app;
