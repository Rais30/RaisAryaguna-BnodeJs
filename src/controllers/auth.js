const { validationResult } = require("express-validator");
const Authorization = require("../models/auth");

exports.register = (req, res, next) => {
  const nama = req.body.nama;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConvirmation = req.body.passwordConvirmation;
  const nomer = req.body.nomer;
  const alamat = req.body.alamat;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Invalid Value");
    error.errorStatus = 400;
    error.data = errors.array();
    throw error;
  }

  const Posting = new Authorization({
    Uid: 1,
    nama: nama,
    email: email,
    password: password,
    passwordConvirmation: passwordConvirmation,
    nomer: nomer,
    alamat: alamat,
  });

  Posting.save()
    .then((result) => {
      console.log("ini adalah responya", result);
      res.status(201).json({
        status: "success",
        message: "Register anda Success",
        data: result,
      });
    })
    .catch((err) => console.log("ini error ", err));
};
