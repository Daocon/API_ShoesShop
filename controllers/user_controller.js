const { UserModel } = require("../models/users");
const JWT = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

exports.getListUser = async (req, res, next) => {
  try {
    let userList = await UserModel.find();
    if (userList.length > 0) {
      res.json({
        status: 200,
        message: "User list retrieved successfully",
        data: userList,
      });
    } else {
      res.json({
        status: 404,
        message: "No users found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//update user with image
exports.updateUserWithImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { file } = req;
    const data = req.body;
    const updatedUser = await UserModel.findById(id);
    let result = null;
    if (updatedUser) {
      (updatedUser.address = data.address ?? updatedUser.address),
        (updatedUser.email = data.email ?? updatedUser.email),
        (updatedUser.avatar = `${req.protocol}://${req.get("host")}/uploads/${file.filename
          }` ?? updatedUser.avatar),
        (updatedUser.name = data.name ?? updatedUser.name),
        (updatedUser.password = data.password ?? updatedUser.password),
        (updatedUser.phone = data.phone ?? updatedUser.phone),
        (result = await updatedUser.save());
    }
    if (result) {
      res.json({
        status: 200,
        message: "User updated successfully",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Update failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedUser = await UserModel.findById(id);
    let result = null;
    if (updatedUser) {
      (updatedUser.address = data.address ?? updatedUser.address),
        (updatedUser.email = data.email ?? updatedUser.email),
        (updatedUser.avatar = data.avatar ?? updatedUser.avatar),
        (updatedUser.name = data.name ?? updatedUser.name),
        (updatedUser.password = data.password ?? updatedUser.password),
        (updatedUser.phone = data.phone ?? updatedUser.phone),
        (result = await updatedUser.save());
    }
    if (result) {
      res.json({
        status: 200,
        message: "User updated successfully",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Update failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    let deletedUser = await UserModel.findByIdAndDelete(userId);
    if (deletedUser) {
      res.json({
        status: 200,
        message: "User deleted successfully",
        data: deletedUser,
      });
    } else {
      res.json({
        status: 404,
        message: "User not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    let user = await UserModel.findById(userId);
    if (user) {
      res.json({
        status: 200,
        message: "User retrieved successfully",
        data: user,
      });
    } else {
      res.json({
        status: 404,
        message: "User not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
//register user

exports.register = async (req, res, next) => {
  try {
    const { file } = req;
    const data = req.body;
    let obj = new UserModel({
      address: data.address,
      email: data.email,
      avatar: `${req.protocol}://${req.get("host")}/uploads/${file.filename
        }`,
      name: data.name,
      password: data.password,
      phone: data.phone,
    });
    let result = await obj.save();
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
  } catch (error) {
    console.log(error);
  }
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDkzMDRlMTdjNTBkYWQzMzdjNWE2OCIsImlhdCI6MTcxMTg4NTI0NSwiZXhwIjoxNzExODg4ODQ1fQ.d6ar-nxX26gox_ejMeuO3fUnHY6ZRNdtOqiFv2pQT7s
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDkzMDRlMTdjNTBkYWQzMzdjNWE2OCIsImlhdCI6MTcxMTg4NTkxMSwiZXhwIjoxNzExODg5NTExfQ.DJbf4CWgT_rUdmQszFuSIgY66RHUO1X_bSTd_BE03xo
const SECRETKEY = uuidv4();
exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email, password });
    if (user) {
      const token = JWT.sign({ id: user._id }, SECRETKEY, { expiresIn: "1h" });
      const refreshToken = JWT.sign({ id: user._id }, SECRETKEY, {
        expiresIn: "1d",
      });
      res.json({
        status: 200,
        messenger: "Sign in successful",
        data: user,
        token: token,
        refreshToken: refreshToken,
      });
    } else {
      res.json({
        status: 400,
        messenger: "loi ko dang nhap thanh cong",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
