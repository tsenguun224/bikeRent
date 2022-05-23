const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
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
    bikeStatus:{
        type:String,
        default:"New"
    }
})
module.exports = mongoose.model("bikes",bikeSchema)