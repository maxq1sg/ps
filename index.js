const express = require("express");
const { sequelize } = require("./models");

const app = express();
app.set("view engine", "ejs");

app.get("/login", (req, res, next) => {
  res.render("pages/login");
});

app.listen(3001, async () => {
  try {
    console.log("server is running on 3001");
    await sequelize.sync({ alter: true });
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
});
