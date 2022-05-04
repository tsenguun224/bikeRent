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
    async getYourBike(req,res){
        Bike.find({bikeEzen:req.userId}).exec(function(err,bike){
            if(err){
                res.status(500).json({msg:"error"})
            }
            if(bike){
                res.json({success:true,bikes:bike})
            }else{
                res.json({success:false,bikes:[]})
            }
        })
        
    }
}
module.exports = new bikeController()