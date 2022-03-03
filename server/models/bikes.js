const mongoose = require('mongoose')

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
        type:String,
        required:true
    }
})
module.exports = mongoose.model("bikes",bikeSchema)