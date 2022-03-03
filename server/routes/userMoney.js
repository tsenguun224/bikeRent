const express = require('express');
const router = express.Router()
const userMoneyController = require('../controller/userMoney')


router.post('/insertMoney',userMoneyController.insertMoney)


module.exports = router;