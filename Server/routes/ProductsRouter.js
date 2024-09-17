const router = require("express").Router();
const  {getProductsController} = require("../controllers/ProductsControllers")
// get home products
router.get("/",getProductsController)



module.exports= router;