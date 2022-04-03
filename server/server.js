const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const helmet = require("helmet");
const xss = require("xss-clean");

const hpp = require("hpp");
var path = require('path')
var rfs = require('rotating-file-stream')
const rateLimit = require("express-rate-limit");


const injectDb = require("./middleware/injectDb");
const errorHandler = require("./middleware/error");
const connectDB = require('./config/db')

const usersRoutes = require("./routes/users");
const bikesRoutes = require('./routes/bikes')


dotenv.config({path:'./config/config.env'})


const app = express();

connectDB()

var whitelist = ['htpp://localhost:3000']


var corsOptions = {
    
    origin: function (origin, callback) {
      if (origin === undefined || whitelist.indexOf(origin) !== -1) {
        
        callback(null, true);
      } else {
        
        callback(new Error("Horigloj baina.."));
      }
    },
   
    allowedHeaders: "Authorization, Set-Cookie, Content-Type",
    
    methods: "GET, POST, PUT, DELETE",
   
    credentials: true,
  };

app.use(express.static(path.join(__dirname,'public')));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 500, 
    message: "15 минутанд 3 удаа л хандаж болно! ",
  });

app.use(limiter);
app.use(hpp());
app.use(cookieParser());
app.use(logger);
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(xss());
app.use('/api/v1/users',usersRoutes);
app.use(bikesRoutes)



const server = app.listen(
    process.env.PORT,
    console.log(`Express server ${process.env.PORT} port deer aslaa`)
)


process.on("unhandledRejection", (err, promise) => {
    console.log(`Алдаа гарлаа : ${err.message}`);
    server.close(() => {
      process.exit(1);
    });
  });