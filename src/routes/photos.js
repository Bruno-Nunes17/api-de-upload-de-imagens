const express = require("express");
const photoController = require("../controllers/photoController");
const upload = require("../config/multer");

const route = express.Router();

route.post("/", upload.single("file"), photoController.create);
route.get("/", photoController.findAll);
route.delete("/:id", photoController.remove);

module.exports = route;
