const User = require('../models/user');
const jwt = require('jsonwebtoken')

class UserController {
    registerUser(req,res){
        const {email,number,password} = req.body;
        const user = new User({
            email:email,
            number:number,
            password:password
        })
        try{

            user.save()
            .then((result)=>{
                console.log(result);
                res.json({message:"Register Success",data:result})
            }).catch( error=>{
                console.log(error);
            })
        }catch(err){
            console.log(err)
        }
    }
    loginUser(req,res){
        const {email,password} = req.body;
        try{
            User.findOne(user => user.email === email)
            .then(user =>{
                if(user.email === email){
                    if(user.password === password){
                        res.json({message:'Login Success'})
                    }else{
                        res.json({
                            message:'User email or password not valid'
                        })
                    }
                }else{
                    res.json({message:'User email or password not valid'})
                }
            }).catch(err =>{
                console.log(err);
            })
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new UserController()