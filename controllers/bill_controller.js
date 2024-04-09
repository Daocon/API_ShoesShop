const { BillModel } = require("../models/bills");

exports.createBill = async (req, res, next) => {
    try {
        let bill = new BillModel(req.body);
        bill = await bill.save();
        res.json({
            status: 200,
            message: "Bill created successfully",
            data: bill,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            message: "Error creating bill",
            data: [],
        });
    }
};

//get all bil
exports.getListBill = async (req, res, next) => {
    try {
        let billList = await BillModel.find();
        if (billList.length > 0) {
            res.json({
                status: 200,
                message: "Cart list retrieved successfully",
                data: billList,
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
}