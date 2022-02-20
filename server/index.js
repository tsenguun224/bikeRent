const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const cors = require('cors');
const passport = require('passport')

const userRouter = require('./routes/users')


server.use(bp.urlencoded({
    extended:false
}));
server.use(cors());

server.use(passport.initialize())
require('./passport')(passport);
server.use(userRouter);



mongoose.connect('mongodb+srv://shop_admin:123@cluster0.oblkb.mongodb.net/bikeRentDataBase')
.then(()=>{
    server.listen(3001,()=>{
        console.log("server started");
    })
})