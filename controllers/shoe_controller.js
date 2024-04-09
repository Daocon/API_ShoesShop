const { ShoeModel } = require("../models/shoes");

//get list shoe
exports.getListShoe = async (req, res, next) => {
    try {
        let shoeList = await ShoeModel.find();
        if (shoeList.length > 0) {
            res.json({
                status: 200,
                message: "Shoe list retrieved successfully",
                data: shoeList,
            });
        } else {
            res.json({
                status: 400,
                message: "No shoes found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};
//get shoe by id_category
exports.getShoeByCategory = async (req, res, next) => {
    try {
        const id_category = req.params.id;
        let shoeList = await ShoeModel.find({ id_category: id_category });
        if (shoeList.length > 0) {
            res.json({
                status: 200,
                message: "Shoe list retrieved successfully",
                data: shoeList,
            });
        } else {
            res.json({
                status: 400,
                message: "No shoes found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//add shoe
exports.addShoe = async (req, res, next) => {
    try {
        const { file } = req;
        const data = req.body;
        let newShoe = new ShoeModel({
            description: data.description,
            favorite: data.favorite,
            id_category: data.id_category,
            name: data.name,
            price: data.price,
            avatar: `${req.protocol}://${req.get("host")}/uploads/${file.filename
                }`,
        });
        let savedShoe = await newShoe.save();
        if (savedShoe) {
            res.json({
                status: 200,
                message: "Shoe added successfully",
                data: savedShoe,
            });
        } else {
            res.json({
                status: 404,
                message: "Add failed",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//get all shoe favorite = true
exports.getFavoriteShoe = async (req, res, next) => {
    try {
        let shoeList = await ShoeModel.find({ favorite: true });
        if (shoeList.length > 0) {
            res.json({
                status: 200,
                message: "Shoe list retrieved successfully",
                data: shoeList,
            });
        } else {
            res.json({
                status: 400,
                message: "No shoes found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//get shoe by id
exports.getShoeById = async (req, res, next) => {
    try {
        const id = req.params.id;
        let shoe = await ShoeModel.findById(id);
        if (shoe) {
            res.json({
                status: 200,
                message: "Shoe retrieved successfully",
                data: shoe,
            });
        } else {
            res.json({
                status: 400,
                message: "No shoes found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};