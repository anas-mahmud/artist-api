const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routers/index");

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("server is running !!!");
});

app.all("*", (req, res) => {
  res.send("No Route Found... !!");
});

module.exports = app;
