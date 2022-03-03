const userMoney = require('../models/bucket');
const Bike = require('../models/bikes');

class userMoneyController {
    async insertMoney(req,res){
        const {money,user} = req.body;
        const moneyUser = new userMoney({
            money:money,
            user:user
        })
        try{
            const result = await moneyUser.save()
            if(result){
                res.json({message:"Амжилттай цэнэглэгдлээ"})
            }else{
                res.json({message:"Алдаа гарлаа дахин оролдон уу!!"})
            }
        }catch(err){
            console.log(err);
        }
    }
    async rentBike(req,res){
        const id = req.body;
        try{

            const Bike = await Bike.findOne({id:id})
            const 
        }catch(err){
            
        }
    }
}


module.exports = new userMoneyController()