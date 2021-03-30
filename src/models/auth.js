const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const Authorization = new Shema(
  {
    nama: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConvirmation: {
      type: String,
      required: true,
    },
    nomer: {
      type: Number,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Authorization", Authorization);
