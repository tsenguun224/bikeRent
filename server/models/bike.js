const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    bikeName:{
        type:String,
        required:true   
    },
    bikePrice:{
        type:String,
        required:true,
    },
    bikeImg:{
        type:String,
        required:true
    },
    bikeEzen:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('bikes',bikeSchema);