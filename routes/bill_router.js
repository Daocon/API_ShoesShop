const express = require("express");
const router = express.Router();
const { createBill, getListBill } = require("../controllers/bill_controller");

router.post("/createBill", createBill);
router.get("/getListBill", getListBill);

module.exports = router; 