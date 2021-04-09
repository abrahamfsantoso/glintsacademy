const { Transaksi, Barang, Pelanggan, Pemasok } = require("../models"); // Import all models
require("../utils/associations"); // Import table relationship

class TransaksiController {
  // Get all transaksi data
  async getAll(req, res) {
    try {
      let data = await Transaksi.findAll({
        // find all data of Transaksi table
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
        include: [
          // Include is join
          {
            model: Barang,
            attributes: ["nama"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: Pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: Pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  getOne(req, res) {
    Transaksi.findOne({
      where: { id: `${req.params.id}` },
      attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]],
      include: [
        {
          model: Barang,
          attributes: ["nama", "harga"],
          include: [{ model: Pemasok, attributes: ["nama"] }],
        },
        { model: Pelanggan, attributes: ["nama"] },
      ],
    })
      .then((data) => {
        return res.status(200).json({
          message: "Success",
          data: data,
        });
      })
      .catch((e) => {
        return res.status(500).json({
          message: "Internal Server Error",
          error: e,
        });
      });
  }
  // Create Transaksi data
  async create(req, res) {
    try {
      let findBarang = await Barang.findOne({
        // find one data of Barang table
        where: {
          id: req.body.id_barang, // where id of Barang table is equal to req.params.id
        },
      });
      let price = findBarang.harga;
      let total = eval(price * req.body.jumlah);
      let createData = await Transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total: total,
      });

      let data = await Transaksi.findOne({
        where: { id: createData.id },
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]],
        include: [
          {
            model: Barang,
            attributes: ["nama", "harga"],
            include: [{ model: Pemasok, attributes: ["nama"] }],
          },
          { model: Pelanggan, attributes: ["nama"] },
        ],
      });

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
