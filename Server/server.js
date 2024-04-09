const express = require("express");
const app = express();
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const Colorize = require( "./config/errorColors");
const authRouter = require("./routes/authRouter");
const ProductsRouter = require("./routes/ProductsRouter")


// dotenv config
dotenv.config()

// parsing data
app.use(express.json())

// Combining routes 
app.use("/api/user", authRouter);
app.use("/", ProductsRouter)


//connect DB
mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        console.log(Colorize.BgGreen , "DB Connected "  , Colorize.Reset);
    })
    .catch(err =>{
    console.log(Colorize.BgRed , "Data Base Error : " , err , Colorize.Reset);
    });



app.listen(PORT , (err)=>{
    if(err) console.log(err);
    console.log("Server is running at ",PORT);
})