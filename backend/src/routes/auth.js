const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

const {
  RegisterValidator,
  UpdateProfileValidator,
  DeleteUserValidator,
} = require("../middleware/validators");

router.post("/register", RegisterValidator, AuthController.Register);
router.get("/getUsers", AuthController.getUsers);
router.post(
  "/updateUser",
  UpdateProfileValidator,
  AuthController.UpdateUserProfile
);

router.post("/delete", DeleteUserValidator, AuthController.Delete);

module.exports = router;
