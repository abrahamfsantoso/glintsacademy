const mongoose = require("mongoose");
const validator = require("validator");
const { pemasok } = require("../../models/index"); // Import all models

exports.getOne = (req, res, next) => {
  // Check parameter is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: "Parameter is not valid and must be 24 character & hexadecimal",
    });
  }

  next();
};

exports.create = async (req, res, next) => {
  try {
    if (validator.isNumeric(req.body.nama)) {
      return res.status(400).json({
        message: "Nama can't be a number!",
      });
    } else {
      // It means that will be go to the next middleware
      next();
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal Server Error",
      error: e,
    });
  }
};

module.exports.update = async (req, res, next) => {
  try {
    let findPemasok = await pemasok.findOne({
      _id: req.params.id,
    });

    let errors = [];

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      errors.push(
        "Parameter is not valid!. Parameter must be 24 character & hexadecimal"
      );
    }

    if (!findPemasok) {
      errors.push("Pemasok Not Found!");
    }

    if (validator.isNumeric(req.body.nama)) {
      errors.push("Nama can't be a number!");
    }

    if (errors.length > 0) {
      // Because bad request
      return res.status(400).json({
        message: errors.join(", "),
      });
    }
    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: e,
    });
  }
};

exports.delete = async (req, res, next) => {
  let errors = [];

  // Check params is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.push(
      "id_pemasok is not valid and must be 24 character & hexadecimal"
    );
  }

  // If params error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Find one pemasok
  let data = await pemasok.findOne({ _id: req.params.id });

  // If pemasok not found
  if (!data) {
    errors.push("pemasok not found");
  }

  // If error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Go to next
  next();
};
