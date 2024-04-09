const { Schema } = require("mongoose");
const db = require("../config/db");

const Bill_Schema = new db.mongoose.Schema(
    {
        payment: { type: String, required: true },
        cart: { type: Array, required: true },
        id_user: { type: Schema.Types.ObjectId, ref: "users" },
        id_shoes: { type: Schema.Types.ObjectId, ref: "shoes" },
        total: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const BillModel = db.mongoose.model("BillModel", Bill_Schema, "bills");
module.exports = { BillModel };
/*
const { Schema } = require("mongoose");
const db = require("../config/db");

const Bill_Schema = new db.mongoose.Schema(
    {
        payment: { type: String, required: true },
        cart: { type: Array, required: true },
        id_user: { type: Schema.Types.ObjectId, ref: "users" },
        id_shoes: { type: Schema.Types.ObjectId, ref: "shoes" },
        quantity: { type: Number, required: true },
        total: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const BillModel = db.mongoose.model("BillModel", Bill_Schema, "bills");

module.exports = { BillModel };

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

const express = require("express");
const router = express.Router();
const { createBill } = require("../controllers/bill_controller");

router.post("/create", createBill);

module.exports = router; */