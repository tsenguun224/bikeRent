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
    async likeReview(req,res){
        const {bikeName} = req.body;
        const oneLike = 0
        const bike = await Bike.findOne({bikeName:bikeName})
        if(bike){
            const alreadyLike = bike.likes.find((r)=>r.user === req.userId)

            if(alreadyLike){
                res.status(400).json({message:'Bike is already liked'})
            }else{
                const like = {
                    like:oneLike+ 1,
                    user:req.userId
                }
                bike.likes.push(like)
                bike.likeNums = bike.likes.length
                await bike.save()
                try{
                    res.json({likeBike:bike})
                }catch(err){
                    throw new Error(err)
                }
            }
            
        }else{
            res.status(404)
            throw new Error('Bike not found')
        }
    }

}
module.exports = new bikeController()