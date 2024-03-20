const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    address: { type: String },
    email: { type: String },
    image: { type: String },
    name: { type: String },
    password: { type: String },
    phone: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", Users);
