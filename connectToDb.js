const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("Data Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectToDB;
