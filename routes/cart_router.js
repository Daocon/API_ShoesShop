var express = require("express");
var router = express.Router();
const CartCtl = require("../controllers/cart_controller");

//cartRouter

router.get("/getListCart", CartCtl.getListCart);
router.post("/addToCart", CartCtl.addToCart);
router.delete("/deleteCart/:id", CartCtl.deleteCart);
//delete all cart
router.delete("/deleteAllCart", CartCtl.deleteAllCart);

module.exports = router;