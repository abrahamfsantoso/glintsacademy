const express = require("express");

const pemasokValidator = require("../middlewares/validators/pemasokValidator");
const pemasokController = require("../controllers/pemasokController");

const router = express.Router();

router.get("/", pemasokController.getAll);
router.get("/:id", pemasokValidator.getOne, pemasokController.getOne);
router.post("/", pemasokValidator.create, pemasokController.create);
router.put("/:id", pemasokValidator.update, pemasokController.update);
router.delete("/:id", pemasokValidator.delete, pemasokController.delete);

module.exports = router;