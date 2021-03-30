const express = require("express");
const bodyPasrer = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// const productsRoutes = require("./src/routers/products");
const authRoutes = require("./src/routers/auth");
const blogRoutes = require("./src/routers/blog");

app.use(bodyPasrer.json()); //type JSON

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// app.use("/v1/custemer", productsRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(400).json({
    message: message,
    data: data,
  });
});

mongoose
  .connect(
    "mongodb+srv://raisAzaria:Raisazaria2903@cluster0.7mmci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => console.log("Connects Succues"));
  })
  .catch((err) => console.log(err));
