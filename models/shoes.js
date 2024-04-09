const { Schema } = require("mongoose");
const db = require("../config/db");
const Shoe_Schema = new db.mongoose.Schema(
    {
        description: { type: String },
        favorite: { type: String },
        id_category: { type: Schema.Types.ObjectId, ref: "categorys" },
        name: { type: String, unique: true, maxLength: 255 },
        price: { type: String },
        avatar: { type: String }
    },
    {
        timestamps: true,
    }
);

const ShoeModel = db.mongoose.model("ShoeModel", Shoe_Schema, "shoes");
module.exports = { ShoeModel };
