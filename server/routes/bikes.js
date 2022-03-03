const express = require('express');
const router = express.Router();


const bikeController = require('../controller/bikes')

router.post('/bikeRent/insertBike',bikeController.insertBike)
router.get('/bikeRent/getBikes',bikeController.getBikes)

module.exports = router;