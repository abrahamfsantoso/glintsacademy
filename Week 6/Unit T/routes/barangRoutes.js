const express = require("express");

//import validator
const barangValidator = require("../middlewares/validators/barangValidator");

//import controller
const barangController = require("../controllers/barangController");
//make router
const router = express.Router();


router.get("/", barangController.getAll);
router.get("/:id",barangValidator.getOne, barangController.getOne);
router.post("/", barangValidator.create, barangController.create);
router.put("/:id", barangValidator.update, barangController.update);
router.delete("/:id", barangValidator.delete, barangController.delete);

module.exports = router;