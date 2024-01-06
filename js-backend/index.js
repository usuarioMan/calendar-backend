const express = require("express");
const api = express();
const port = 4001;

api.get("/", (req, res) => {
  res.send("Hello World!");
});

//  Start the server.
api.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
