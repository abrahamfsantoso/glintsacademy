const { barang, pelanggan, transaksi } = require("../models");

class TransaksiController {
  async getAll(req, res) {
    transaksi.find().then((result) => {
      if (result.length === 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }
      res.json({
        status: "success",
        data: result,
      });
    });
  }
  async getOne(req, res) {
    transaksi
      .findOne({
        _id: req.params.id,
      })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            message: "Transaksi Not Found",
          });
        } else {
          res.json({
            status: "success",
            data: result,
          });
        }
      });
  }
  async create(req, res) {
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang,
      }),

      pelanggan.findOne({
        _id: req.body.id_pelanggan,
      }),
    ]);
    if (!data[0] || !data[1]) {
      return res.status(404).json({
        message: "Barang or Transaksi Not Found",
      });
    }
    let total = eval(data[0].harga.toString()) * req.body.jumlah;

    transaksi
      .create({
        barang: data[0],
        pelanggan: data[1],
        jumlah: eval(req.body.jumlah),
        total: total,
      })
      .then((result) => {
        if (!result) {
          return res.status(500).json({
            message: "Internal Service Error",
            error: e,
          });
        } else {
          res.status(201).json({
            status: "success",
            result: result,
          });
        }
      });
  }
  async update(req, res) {
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang,
      }),
      pelanggan.findOne({
        _id: req.body.id_pelanggan,
      }),
    ]);

    let total = eval(data[0].harga.toString()) * req.body.jumlah;

    transaksi
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          barang: data[0],
          pelanggan: data[1],
          jumlah: eval(req.body.jumlah),
          total: total,
        }
      )
      .then(() => {
        return transaksi.findOne({
          _id: req.params.id,
        });
      })
      .then((result) => {
        res.json({
          status: "success",
          result: result,
        });
      });
  }
  async delete(req, res) {
    transaksi
      .delete({
        _id: req.params.id,
      })
      .then(() => {
        res.json({
          status: "success",
          data: null,
        });
      });
  }
}

module.exports = new TransaksiController();
