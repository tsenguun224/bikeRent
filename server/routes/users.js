const express = require("express");
const { protect, authorize } = require("../middleware/protect");

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  getUser,
} = require("../controller/users");



const router = express.Router();

//"/api/v1/users"
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);
router.route("/getUser/:id").post(getUser)
router.use(protect);





module.exports = router;
