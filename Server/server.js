const express = require("express");
const app = express();
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const Colorize = require( "./config/errorColors");
const authRouter = require("./routes/authRouter");
const ProductsRouter = require("./routes/ProductsRouter")
const dashboardRouter = require("./routes/dashboardRouter")
const supportRouter = require("./routes/supportRouter")

// dotenv config
dotenv.config()

// parsing data
app.use(express.json())

// Combining routes 
app.use("/api/user", authRouter);
app.use("/api/products", ProductsRouter)
app.use("/api/admin",dashboardRouter)
app.use("/api/support", supportRouter)

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

