var express = require("express");
var router = express.Router();
const Upload = require("../config/common/upload");
const CategoryCtl = require("../controllers/category_controller");

//categoryRouter

router.get("/getListCategory", CategoryCtl.getListCategory);
router.post("/addCategory", Upload.single('avatar'), CategoryCtl.addCategory);

module.exports = router;