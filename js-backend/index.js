const express = require("express");
const path = require("path");
const api = express();
const port = 4001;
const pathPublic = path.join(__dirname, "../public");

// Public Directory
api.use(express.static(pathPublic));

api.get("/", (req, res) => {
  res.send("Hello World!");
});
api.get("/pote", (req, res) => {
  res.send("Hello World!");
});

//  Start the server.
api.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
