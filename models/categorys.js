const db = require("../config/db");
const Category_Schema = new db.mongoose.Schema(
    {
        name: { type: String, unique: true, maxLength: 255 },
        avatar: { type: String },
    },
    {
        timestamps: true,
    }
);

const CategoryModel = db.mongoose.model("CategoryModel", Category_Schema, "categorys");
module.exports = { CategoryModel };
