const http = require("http");
const app = require("./app");
const port = process.env.PORT || 5001;

const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend application.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization", // Include 'Content-Type' in the allowed headers.
};

app.use(cors(corsOptions));
const server = http.createServer(app);
server.listen(port);
