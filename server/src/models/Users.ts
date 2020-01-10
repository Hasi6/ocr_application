import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  verifyAccount: {
    type: Boolean,
    default: false
  },
  addedDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("users", UsersSchema);