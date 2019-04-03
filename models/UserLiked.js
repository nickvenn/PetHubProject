const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserLikedSchema = new Schema({
  UserID: {
    type: String,
    required: true
  },
  PetID: {
    type: String,
    required: true
  },
});
const UserLiked = mongoose.model("UserLiked", UserLikedSchema);

module.exports = UserLiked;
