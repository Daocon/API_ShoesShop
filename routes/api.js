var express = require("express");
var router = express.Router();

const Users = require("../models/users");

//api add user
router.post("/add-user", async (req, res) => {
  try {
    const data = req.body; // lay du lieu tu body
    const newUser = new Users({
      address: data.address,
      email: data.email,
      image: data.image,
      name: data.name,
      password: data.password,
      phone: data.phone,
    }); // tao doi tuong moi
    const result = await newUser.save(); //them vao database
    if (result) {
      res.json({
        status: 200,
        messenger: "Thêm thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Thêm không thành công",
        data: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
