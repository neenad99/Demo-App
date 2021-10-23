const express = require('express');
const router = express.Router();
const validateSchema = require("../middleware/validate");
const userController = require("../controller/users.controller");

router.get("/",userController.getAllUsers);

module.exports = router;