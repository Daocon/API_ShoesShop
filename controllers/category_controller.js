const { CategoryModel } = require("../models/categorys");

//get list category
exports.getListCategory = async (req, res, next) => {
    try {
        let categoryList = await CategoryModel.find();
        if (categoryList.length > 0) {
            res.json({
                status: 200,
                message: "Category list retrieved successfully",
                data: categoryList,
            });
        } else {
            res.json({
                status: 404,
                message: "No categorys found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//add category
exports.addCategory = async (req, res, next) => {
    try {
        const { file } = req;
        const data = req.body;
        let newCategory = new CategoryModel({
            name: data.name,
            avatar: `${req.protocol}://${req.get("host")}/uploads/${file.filename
                }`,
        });
        let categorySave = await newCategory.save();
        if (categorySave) {
            res.json({
                status: 200,
                message: "Category added successfully",
                data: categorySave,
            });
        } else {
            res.json({
                status: 404,
                message: "Category not added",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};
