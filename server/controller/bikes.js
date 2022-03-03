const Bike = require('../models/bikes');

class bikeController {
    async insertBike(req,res){
        const { bikeName,bikeImage,bikePrice,bikeEzen } = req.body;
        const newBike = await new Bike({
            bikeName:bikeName,
            bikeImage:bikeImage,
            bikePrice:bikePrice,
            bikeEzen:bikeEzen
        })
        try{
            const result = await newBike.save()
            if(result){
                console.log(result)
                res.json({message:"Successful insert bike"})
            }else{
                res.json({message:'register bike with failed'})
            }
        }catch(err){
            console.log(err);
        }
    }
    async getBikes(req,res){
       try{
        const bikes = await Bike.find()
        if(bikes){
            res.json({bikes:bikes})
        }else{
            res.json({message:"NoOne inserted bike"})
        }
    }catch(err){
        console.log(err);
    }
    }
}
module.exports = new bikeController()