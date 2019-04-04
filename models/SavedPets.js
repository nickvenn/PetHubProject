const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SavedPetsSchema = new Schema({
  UserID: {
    type: String,
    required: true
  },
  PetID: {
    type: String,
    required: true
  },
});
const UserLiked = mongoose.model("UserLiked", SavedPetsSchema);

module.exports = UserLiked;
