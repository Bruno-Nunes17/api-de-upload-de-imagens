const express = require("express");
const photosRouter = require("./photos");

const route = express.Router();

route.use("/photos", photosRouter);
route.get("/", (req, res) => {
  res.json({ message: "API online 😎" });
});

module.exports = route;
