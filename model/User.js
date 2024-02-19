const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  specie: String,
  volume: Number,
  age: String,
  history: String,
  weight: String,
  mon: String,
  dad: String,
  date: String,
  human: String,
  placeborn: String,
  placefeed: String,
  health: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
