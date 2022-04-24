const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/protect')


const bikeController = require('../controller/bikes')

router.post('/bikeRent/insertBike',protect,bikeController.insertBike)
router.get('/bikeRent/getBikes',bikeController.getBikes)
router.post('/bikeRent/like',bikeController.likeReview)



module.exports = router;