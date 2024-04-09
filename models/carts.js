const { Schema } = require("mongoose");
const db = require("../config/db");
const Cart_Schema = new db.mongoose.Schema(
    {
        color: { type: String, unique: true, maxLength: 255 },
        size: { type: String, unique: true, maxLength: 255 },
        quantity: { type: String, unique: true, maxLength: 255 },
        id_shoes: { type: Schema.Types.ObjectId, ref: "shoes" },
    },
    {
        timestamps: true,
    }
);

const CartModel = db.mongoose.model("CartModel", Cart_Schema, "carts");
module.exports = { CartModel };
