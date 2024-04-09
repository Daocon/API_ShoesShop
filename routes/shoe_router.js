var express = require("express");
var router = express.Router();
const Upload = require("../config/common/upload");
const ShoeCtl = require("../controllers/shoe_controller");

//shoeRouter

router.get("/getListShoe", ShoeCtl.getListShoe);
router.get("/getShoeByCategory/:id", ShoeCtl.getShoeByCategory);
router.post("/addShoe", Upload.single('avatar'), ShoeCtl.addShoe);
router.get("/getFavoriteShoe", ShoeCtl.getFavoriteShoe);
router.get("/getShoeById/:id", ShoeCtl.getShoeById);

module.exports = router;