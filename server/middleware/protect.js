const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandle");
const MyError = require("../utils/myError");
const User = require("../models/users");

exports.protect = asyncHandler(async (req, res, next) => {
  let token = null;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies) {
    token = req.cookies["bike-token"];
  }



  const tokenObj = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = tokenObj.id;
  req.userRole = tokenObj.role;

  next();
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      throw new MyError(
        "Таны эрх [" + req.userRole + "] энэ үйлдлийг гүйцэтгэхэд хүрэлцэхгүй!",
        403
      );
    }

    next();
  };
};
