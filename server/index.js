const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');


const userRouter = require('./routes/users')


server.use(bp.json());
server.use(cors());
server.use(userRouter)



mongoose.connect('mongodb+srv://shop_admin:123@cluster0.oblkb.mongodb.net/bikeRentDataBase')
.then(()=>{
    server.listen(3001,()=>{
        console.log("server started");
    })
})