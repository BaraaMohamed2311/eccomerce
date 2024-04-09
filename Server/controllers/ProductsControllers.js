const ProductsModel = require("../models/Products")

const getProductsController = async (req , res)=>{
        try{
            const {currpage , pagesize} = req.query;
            let requestedProducts;
            // converting queries to integer for searching & conditioning
            const current = parseInt(currpage);
            const size = parseInt(pagesize);
            if(current === 1 ){
                // to find first portion of products 
            requestedProducts = await ProductsModel.find().limit(size)
        }
            else{
                // to find next portion of products 
             requestedProducts = await ProductsModel.find().skip((current - 1) * size).limit(size)
            }

            res.json({
                success:true,
                products:requestedProducts
            })
        }
        catch (err) {
            console.log("error from homeproducts controller" , err);
            res.status(404).json({
                success:false,
                message:"Requested Home Products Failed"
            })
        }
}


module.exports =  {getProductsController}