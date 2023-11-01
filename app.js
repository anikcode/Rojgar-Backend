const express = require("express");
const app = express();
const optInRoutes = require("./routes/routes");

// app.use((req, res, next) => {
//   const origin = req.header.origin;
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept,Authorization,token"
//   );
//   next();
// });
app.use("/opt-in", optInRoutes);

module.exports = app;
