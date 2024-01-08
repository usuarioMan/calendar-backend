const express = require("express");
require("dotenv").config();
const path = require("path");
const api = express();
const port = process.env.PORT;
const pathPublic = path.join(__dirname, "../public");

// Public Directory
api.use(express.static(pathPublic));

//Set Routes
api.use("/api/auth", require("./routes/auth"));

//  Start the server.
api.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
