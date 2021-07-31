  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HobbiesSchema = new Schema(
  {
    passionLevel: String,
    hobbyName: String,
    year: String

  },

);

module.exports = Hobbies = mongoose.model("Hobbies", HobbiesSchema);