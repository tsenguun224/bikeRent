const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.post('/bikeRent/registerUser',userController.registerUser)

module.exports = router;