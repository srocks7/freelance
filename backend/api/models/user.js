  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    userName: String,
    hobbies:{ type: Schema.Types.ObjectId, ref: "Hobbies" }
  },

);

module.exports = User = mongoose.model("User", UserSchema);