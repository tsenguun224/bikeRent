const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const likeSchema = mongoose.Schema({
    like:{type:Number,required:true},
    user:{
        type:ObjectId,
        ref:"User"
    }
})
const bikeSchema = new mongoose.Schema({
    bikeName:{
        type:String,
        required:true
    },
    bikeImage:{
        type:String,
        required:true
    },
    bikePrice:{
        type:Number,
        required:true
    },
    bikeEzen:{
        type:ObjectId,
        ref:"User",
        required: true
    },
    likes:[likeSchema],
    likesNums:{
        type:Number,
        required:true,
        default:0
    }
})
module.exports = mongoose.model("bikes",bikeSchema)