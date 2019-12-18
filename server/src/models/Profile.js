const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profilesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  university: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  bio: {
    type: String
  }
});

module.exports = mongoose.model("profiles", profilesSchema);
