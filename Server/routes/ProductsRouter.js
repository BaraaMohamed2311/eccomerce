const router = require("express").Router();
const  {getProductsController} = require("../controllers/ProductsControllers")
// get home products
router.get("/api/products",getProductsController)



module.exports= router;