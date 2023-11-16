const express = require("express");
const photosRouter = require("./photos");

const route = express.Router();

route.use("/photos", photosRouter);

module.exports = route;
