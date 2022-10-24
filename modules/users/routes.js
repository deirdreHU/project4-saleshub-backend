const express = require("express");
const {UsersController} = require("./users.controller");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {handleImage} = require("../../middlewares/handleImage");

const router = express.Router();

router.get('', UsersController.getUsers);
router.post("/register", UsersController.signUp);
router.post('/login', UsersController.signIn);
router.put("/password", verifyUser, UsersController.updatePassword);

module.exports = router;
