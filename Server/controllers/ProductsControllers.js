const ProductsModel = require("../models/Products")
const filterProductsHelper = require("../helpers/filterProductsHelper")
const getProductsController = async (req , res)=>{
        try{
            const  {currpage ,pagesize ,  ...queries} = req.query;
           
            let requestedProducts;
            
            // Filter out undefined keys in queries that is inserted 
            const filteredQueries = Object.fromEntries(
                Object.entries(queries).filter(([key, value]) =>  value !== undefined && value !== '' )
            );

            let filterOptions = filterProductsHelper(filteredQueries)
            let queriesLength = Object.values(filteredQueries).length;

            console.log("queriesLength",queriesLength ,queries ,req.query)
    /****************************If queriesLength means no additional filtering******************************************/
            // converting queries to integer for searching & conditioning
            const current = parseInt(currpage);
            const size = parseInt(pagesize);
            if(current === 1 && queriesLength ===0){
                // to find first portion of products 
            requestedProducts = await ProductsModel.find().limit(size)
        }
            else if(queriesLength ===0) {
                // to find next portion of products 
             requestedProducts = await ProductsModel.find().skip((current - 1) * size).limit(size)
            }
            else{
                requestedProducts = await ProductsModel.find(filterOptions).skip((current - 1) * size).limit(size)
            }

            // Check if requestedProducts is empty
            if (requestedProducts.length === 0) {
                return res.json({
                  success: true,
                  products: [], // Return an empty array if no products are found
                });
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