const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");

module.exports = { barang, pelanggan, pemasok, transaksi };
