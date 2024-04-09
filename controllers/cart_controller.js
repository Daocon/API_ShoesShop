const { CartModel } = require('../models/carts');

//add to cart (color, size, quantity, id_shoe)
exports.addToCart = async (req, res, next) => {
    try {
        const data = req.body;
        let newCart = new CartModel({
            color: data.color,
            size: data.size,
            quantity: data.quantity,
            id_shoes: data.id_shoes,
        });
        // console.log(data);
        let result = await newCart.save();
        if (result) {
            res.json({
                status: 200,
                message: "Cart added successfully",
                data: result,
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

//get list cart
exports.getListCart = async (req, res, next) => {
    try {
        let cartList = await CartModel.find();
        if (cartList.length > 0) {
            res.json({
                status: 200,
                message: "Cart list retrieved successfully",
                data: cartList,
            });
        } else {
            res.json({
                status: 404,
                message: "No carts found",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//delete cart by id
exports.deleteCart = async (req, res, next) => {
    try {
        const id = req.params.id;
        let cart = await CartModel.findByIdAndDelete(id);
        if (cart) {
            res.json({
                status: 200,
                message: "Cart deleted successfully",
                data: cart,
            });
        } else {
            res.json({
                status: 404,
                message: "Delete failed",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//delete all cart
exports.deleteAllCart = async (req, res, next) => {
    try {
        let cart = await CartModel.deleteMany();
        if (cart) {
            res.json({
                status: 200,
                message: "Cart deleted successfully",
                data: cart,
            });
        } else {
            res.json({
                status: 404,
                message: "Delete failed",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
    }
};