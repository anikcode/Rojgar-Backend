const express = require("express");
const app = express();
const optInRoutes = require("./routes/routes");

app.use("/opt-in", optInRoutes);

module.exports = app;
