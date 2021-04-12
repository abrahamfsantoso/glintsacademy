const mongoose = require("mongoose");
const validator = require("validator");
const {pelanggan} = require("../../models");

module.exports.getOne = (req, res, next) => {
  // Check parameter is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: "Parameter is not valid and must be 24 character & hexadecimal",
    });
  }

  next();
};


module.exports.create = async (req, res, next) => {
  // Initialita
  let errors = [];

  if (!validator.isAlpha(req.body.nama)) {
    errors.push("Nama has to be alpha only");
  }

  if (!validator.isEmail(req.body.email)) {
    errors.push("Please input valid email");
  }

  if (!validator.isMobilePhone(req.body.mobile_phone)) {
    errors.push("Please input valid phone number");
  }
  
  // If errors length > 0, it will make errors message
  if (errors.length > 0) {
    // Because bad request
    return res.status(400).json({
      message: errors.join(", and "),
    });
  }
  // It means that will be go to the next middleware
  next();
};

module.exports.update = async (req, res, next) => {
  let errors = [];

  // Check parameter id is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.push(
      "id_pelanggan is not valid and must be 24 character & hexadecimal"
    );
  }

  // Find pelanggan
  let findData = await pelanggan.findOne( {_id : req.params.id} );

  // if pelanggan not found
  if (!findData) {
    errors.push("Pelanggan not found");
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

module.exports.delete = async (req, res, next) => {
  let errors = [];

  // Check params is valid or not
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    errors.push(
      "id_pelanggan is not valid and must be 24 character & hexadecimal"
    );
  }

  // If params error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // Find one pelanggan
  let data = await pelanggan.findOne({ _id: req.params.id });

  // If pelanggan not found
  if (!data) {
    errors.push("Pelanggan not found");
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