const Bike = require('../models/bikes');

class bikeController {
    async insertBike(req,res){
        const { bikeName,bikeImage,bikePrice} = req.body;
        const newBike = await new Bike({
            bikeName:bikeName,
            bikeImage:bikeImage,
            bikePrice:bikePrice,
            bikeEzen:req.userId
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
        
        const search = req.query
        
       try{
        const bikes = await Bike.find(search).lean().populate('bikeEzen').exec()
    
        if(bikes){
            
            res.json({bikes})
        }else{
            res.json({message:"NoOne inserted bike"})
        }
    }catch(err){
        console.log(err);
    }
    }
}
module.exports = new bikeController()