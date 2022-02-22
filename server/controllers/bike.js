const Bike = require('../models/bike');


class bikeController {
    insertBike(req,res){
        const {bikeName,bikePrice,bikeImg,bikeEzen} = req.body;

        const newBike = new Bike({
            bikeName:bikeName,
            bikePrice:bikePrice,
            bikeImg:bikeImg,
            bikeEzen:bikeEzen
        })
        try{
            newBike.save()
            .then(bike =>{
                if(!bike){
                    res.status(400).json({err})
                }else{
                    console.log(bike)
                    res.json({message:'Amjilttai dugui burtgelee'})
                }
            })
        }catch(err){
            console.log(err);
        }
    }
    async getBike(req,res){
        try{
            const bikes =  await Bike.find()
            res.json({
                bikes:bikes
            })
        }catch(err){
            console.log(err);
        }
    }
}
module.exports = new bikeController()