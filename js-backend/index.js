const express = require("express");
require("dotenv").config();
const { connectDatabase } = require("./database/config");
const path = require("path");
const api = express();
const port = process.env.PORT;
const pathPublic = path.join(__dirname, "../public");

// Database connection.
connectDatabase();

// Public Directory
api.use(express.static(pathPublic));

// Middleware to parse JSON requests.
api.use(express.json());

//Middleware to set Router.
api.use("/api/auth", require("./routes/auth"));

//  Start the server.
api.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
