const express = require("express");
const route = express.Router();
const controller = require("../controllers/controller");

route.get("/:name", controller.get);
route.post("/:name", controller.post);
route.put("/:name", controller.put);
route.delete("/:name", controller.delete);

// Export router so index.js can access the router
module.exports = route;