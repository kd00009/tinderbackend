const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("cards", cardSchema);
