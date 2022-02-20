const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

class UserController {
    registerUser(req,res){
        const { errors, isValid } = validateRegisterInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        };

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
    loginUser(req,res){
        const {errors,isValid} = validateLoginInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }


        const email = req.body.email;
        const password = req.body.password;


        User.findOne({email}).then((user) =>{
            if(!user){
                return res.status(400).json({email:'Email not found'})
            }
                bcrypt.compare(password,user.password).then(isMatch =>{
                    if(isMatch){
                        
                        const payload = {
                            id:user.id,
                            name:user.name
                        }
                        jwt.sign(
                            payload,
                            'tsenguun',
                            {
                                expiresIn:31556926
                            },
                            (err,token)=>{
                                res.json({success:true,
                                token:"Bearer " + token
                            })
                            }
                        )
                    }else{
                        return res.status(400).json({passwordInCorrect:'Password is incorrect'})
                    }
                })
            
        })
        
    }
}

module.exports = new UserController()