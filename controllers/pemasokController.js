const crypto = require("crypto");
const path = require("path");
const { pemasok } = require("../models");

class PemasokController {
  async getAll(req, res) {
    try {
      let data = await pemasok.find();

      if (data.length === 0) {
        return res.status(404).json({
          message: "pemasok not found!",
        });
      }

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal server error!",
        error: e,
      });
    }
  }

  async getOne(req, res) {
    try {
      let data = await pemasok.findOne({
        _id: req.params.id,
      });

      if (!data) {
        return res.status(404).json({
          message: "pemasok not found!",
        });
      }

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal server error!",
        error: e,
      });
    }
  }

  async create(req, res) {
    try {
      if (req.files) {
        const file = req.files.photo;

        // Make sure photo is photo
        if (!file.mimetype.startsWith("image")) {
          return res.status(400).json({ message: "File must be a image" });
        }

        // Check file size (max 1MB)
        if (file.size > 1000000) {
          return res
            .status(400)
            .json({ message: "photo must be less than 1MB" });
        }

        // Create custom filename
        let fileName = crypto.randomBytes(16).toString("hex");

        // Rename the file
        file.name = `${fileName}${path.parse(file.name).ext}`;

        // assign req.body.photo with file.name
        req.body.photo = file.name;

        // Upload photo to /public/photos
        file.mv(`./public/images/${file.name}`, async (err) => {
          if (err) {
            console.error(err);

            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }
        });
      }

      let data = await pemasok.create(req.body);

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  async update(req, res) {
    try {
      if (req.files) {
        const file = req.files.photo;

        // Make sure photo is photo
        if (!file.mimetype.startsWith("image")) {
          return res.status(400).json({ message: "File must be an image" });
        }

        // Check file size (max 1MB)
        if (file.size > 1000000) {
          return res
            .status(400)
            .json({ message: "photo must be less than 1MB" });
        }

        // Create custom filename
        let fileName = crypto.randomBytes(16).toString("hex");

        // Rename the file
        file.name = `${fileName}${path.parse(file.name).ext}`;

        // assign req.body.photo with file.name
        req.body.photo = file.name;

        // Upload photo to /public/photos
        file.mv(`./public/images/${file.name}`, async (err) => {
          if (err) {
            console.error(err);

            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }
        });
      }

      let data = await pemasok.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        {
          new: true,
        }
      );

      return res.status(200).json({
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

  async delete(req, res) {
    try {
      // delete data
      await pemasok.delete({ _id: req.params.id });

      return res.status(200).json({
        message: "Success delete pemasok",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new PemasokController();
