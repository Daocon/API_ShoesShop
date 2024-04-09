var express = require("express");
var router = express.Router();
const UserCtl = require("../controllers/user_controller");
const Upload = require("../config/common/upload");

//userRouter

router.get("/getListUser", UserCtl.getListUser);
router.delete("/deleteUser/:id", UserCtl.deleteUser);
router.put("/updateUser/:id", UserCtl.updateUser);
router.put("/updateUserWithImage/:id", Upload.single('avatar'), UserCtl.updateUserWithImage);
router.get("/getUser/:id", UserCtl.getUserById);
router.post("/signin", UserCtl.signIn);
router.post("/register", Upload.single('avatar'), UserCtl.register);


module.exports = router;
