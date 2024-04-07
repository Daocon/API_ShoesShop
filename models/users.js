const db = require("../config/db");
const User_Schema = new db.mongoose.Schema(
  {
    address: { type: String, unique: true, maxLength: 255 },
    email: { type: String, unique: true, maxLength: 255 },
    avatar: { type: String },
    name: { type: String },
    password: { type: String },
    phone: { type: String },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserModel = db.mongoose.model("UserModel", User_Schema);
module.exports = { UserModel };
