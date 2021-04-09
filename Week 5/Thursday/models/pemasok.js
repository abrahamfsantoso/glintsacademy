const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const PemasokSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
        type:String,
        required:false,
        default:null,
        get: getPhoto
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { getters: true},

  }
);

function getPhoto(photo) {
  return `/images/${photo}`;
}

PemasokSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("pemasok", PemasokSchema, "pemasok");
