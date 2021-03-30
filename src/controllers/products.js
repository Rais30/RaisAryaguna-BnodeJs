const data = [
  {
    id: 1,
    nama: "Yamin",
    perusahaan: "PIM",
    alamat: "Tanggerang ",
  },
  {
    id: 2,
    nama: "Radian",
    perusahaan: "Muslim SDA",
    alamat: "jogja ",
  },
  {
    id: 3,
    nama: "fathul",
    perusahaan: "Nibras",
    alamat: "Bekasi ",
  },
];

exports.createProducts = (req, res, next) => {
  console.log("resquest :", req.body);
  const nama = req.body.nama;
  const perusahaan = req.body.perusahaan;
  const alamat = req.body.alamat;
  res.json({
    status: "success",
    message: "Creat Products Success Bang",
    data: {
      id: 1,
      nama: nama,
      perusahaan: perusahaan,
      alamat: alamat,
    },
  });
  next();
};

exports.getAllProduct = (req, res, next) => {
  const idQ = Number(req.params.id);
  const post = data.find((el) => el.id == idQ);
  if (post == null) {
    res.json({
      message: "Get Products Success",
      data: data,
    });
  } else {
    res.json({
      message: "Get Products Success",
      data: post,
    });
  }
  next();
};
