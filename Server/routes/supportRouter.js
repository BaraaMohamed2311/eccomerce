const router = require("express").Router();
const {mailSupportController} = require("../controllers/supportControllers")
// get home products
router.post("/",mailSupportController)



module.exports= router;