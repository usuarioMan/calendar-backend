const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;

async function connectDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
}

module.exports = { connectDatabase };
