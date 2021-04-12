const express = require("express");
const router = express.Router();
// Import validator
const pelangganValidator = require('../middlewares/validators/pelangganValidator');

// Import controller
const pelangganController = require('../controllers/pelangganController');

// Import auth (middleware)
const auth = require("../middlewares/auth");

// Get all pelanggan data
router.get("/", auth.admin, pelangganController.getAll);

// Get one pelanggan
router.get("/:id", auth.admin, pelangganValidator.getOne, pelangganController.getOne);

// Create pelanggan
router.post("/", auth.admin, pelangganValidator.create, pelangganController.create);

// Update pelanggan
router.put("/:id", auth.admin, pelangganValidator.update, pelangganController.update);

// Delete pelanggan
router.delete("/:id", auth.admin, pelangganValidator.delete, pelangganController.delete);

module.exports = router;