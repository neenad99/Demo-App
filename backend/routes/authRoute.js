const express = require('express');
const router = express.Router();
const validateSchema = require("../middleware/validate");
const authController = require("../controller/auth.controller");

router.post('/',authController.postUser);

module.exports = router;