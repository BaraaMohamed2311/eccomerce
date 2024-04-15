const router = require("express").Router();
const  {getAllUsers , getAllProducts} = require("../controllers/dashboardControllers")
// get home products
router.get("/all-users",getAllUsers)
router.get("/all-products",getAllProducts)


module.exports= router;