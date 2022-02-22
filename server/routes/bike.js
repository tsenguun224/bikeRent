const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bike');

router.post('/bikeRent/insertBike',bikeController.insertBike);
router.get('/bikeRent/getBikes',bikeController.getBike);


module.exports = router;