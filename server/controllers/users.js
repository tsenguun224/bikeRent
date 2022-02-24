const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


class UserController {
    registerUser(req,res){
        

        User.findOne({email:req.body.email}).then(user =>{
            if(user){
                return res.status(400).json({email:"email already exists"});
            }else{
                const newUser = new User({
                    email:req.body.email,
                    name:req.body.name,
                    password:req.body.password
                })
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err=>{console.log(err)})
                    })
                })
            }
        })
        
    }
   async loginUser(req,res){
       


        const email = req.body.email;
        const password = req.body.password;

        try{
            const user = await User.findOne({email:email});
            if(!user){
                res.status(400).json({message:'user not found'})
            }else{
                bcrypt.compare(password,user.password).then(isMatch =>{
                    if(isMatch){
                        const payload = {
                            id:user._id,
                            name:user.name
                        }
                        jwt.sign(payload,'tsenguun',{expiresIn:'2h'},(err,token)=>{
                            if(err) return err
                            res.json({token:"Bearer "+ token})
                        })
                    }else{
                        res.status(400).json({message:'Email or password wrong'})
                    }
                    
                })
                .catch(err => console.log(err))
                    
                
            }
        }catch(err){
            console.log(err)
        }
        
       
    }
}

module.exports = new UserController()