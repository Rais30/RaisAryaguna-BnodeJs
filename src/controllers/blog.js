const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image;
  const body = req.body.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Invailed Value");
    error.errorStatus = 400;
    error.data = errors.array();
    throw error;
  }

  const Posting = new BlogPost({
    title: title,
    body: body,
    author: {
      Uid: 1,
      nama: "Rais Azaria A",
    },
  });

  Posting.save()
    .then((result) => {
      res
        .status(201)
        .json({ message: "Create Blog Post Success", data: result });
    })
    .catch((err) => console.log(err));
};
