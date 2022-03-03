const mongoose = require('mongoose');

const userMoney = new mongoose.Schema({
    money:{
        type:Number,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('userMoney',userMoney);