const { barang, pelanggan, transaksi } = require("../../models");
const validator = require ("validator");
const mongoose = require("mongoose");

exports.getOne = (req,res, next) => {
  if (!mongoose.Types.ObjectID.isValid(req.params.id)) {
    return res.status(400).json({
      message: "Parameter is not valid and must be 24 characters & hexadecimal",
    })
  }
  next()
};

exports.create = (req, res, next) => {
  if (!mongoose.Types.ObjectID.isValid(req.params.id)) {
    errors.push("id_barang is not valid ")
  }
}



// const {
//   check,
//   validationResult,
//   matchedData,
//   sanitize,
// } = require("express-validator"); //form validation & sanitize form params

// module.exports = {
//   create: [
//     //Set form validation rule
//     check("id_barang").custom((value) => {
//       return barang.findById(value).then((b) => {
//         if (!b) {
//           throw new Error("ID barang tidak ada!");
//         }
//       });
//     }),
//     check("id_pelanggan").custom((value) => {
//       return pelanggan.findById(value).then((p) => {
//         if (!p) {
//           throw new Error("ID pelanggan tidak ada!");
//         }
//       });
//     }),
//     check("jumlah").isNumeric(),
//     (req, res, next) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(422).json({
//           errors: errors.mapped(),
//         });
//       }
//       next();
//     },
//   ],
//   update: [
//     //Set form validation rule
//     check("id").custom((value) => {
//       return transaksi.findById(value).then((b) => {
//         if (!b) {
//           throw new Error("ID barang tidak ada!");
//         }
//       });
//     }),
//     check("id_barang").custom((value) => {
//       return barang.findById(value).then((b) => {
//         if (!b) {
//           throw new Error("ID barang tidak ada!");
//         }
//       });
//     }),
//     check("id_pelanggan").custom((value) => {
//       return pelanggan.findById(value).then((p) => {
//         if (!p) {
//           throw new Error("ID pelanggan tidak ada!");
//         }
//       });
//     }),
//     check("jumlah").isNumeric(),
//     (req, res, next) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(422).json({
//           errors: errors.mapped(),
//         });
//       }
//       next();
//     },
//   ],
// };

