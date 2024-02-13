const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  price: String,
  volume: Number,
  mon: String,
  dad: String,
  score: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
