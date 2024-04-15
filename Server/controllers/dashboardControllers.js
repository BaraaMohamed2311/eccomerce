const UserModel = require ("../models/User");
const ProductsModel = require ("../models/Products");
const getAllUsers = async (req , res)=>{
    try{
        const allUsers = await UserModel.find({isAdmin:false},{_id:1,email:1,username:1,createdAt:1})
        if(!allUsers){
            res.status(404).json({
                success:false,
                message:"No Users Found"
            })
        }
        res.status(200).json({
            success:true,
            allUsersData: {
                color: "#8884d8",
                title:"All Users",
                allUsers,
                dataKey: "users",
                number:allUsers.length,
                percentage:"45",
                chartData: [
                { name: "Sun", users: 400 },
                { name: "Mon", users: 600 },
                { name: "Tue", users: 500 },
                { name: "Wed", users: 700 },
                { name: "Thu", users: 400 },
                { name: "Fri", users: 500 },
                { name: "Sat", users: 450 }
              ]},
            message:"All Users Are Fetched"
        })
    }
    catch(err){
        console.log("Error Fetching All Users",err)
        res.status(500).json({
            success:false,
            message:"Error Fetching All Users"
        })
    }
}

const getAllProducts = async (req , res)=>{
    try{
        const allProducts = await ProductsModel.find({},{Show_case:0})
        if(!allProducts){
            res.status(404).json({
                success:false,
                message:"No Products Found"
            })
        }
        res.status(200).json({
            success:true,
            allProductsData: {
                color: "skyblue",
                title: "Total Products",
                number: allProducts.length,
                dataKey: "products",
                allProducts,
                percentage: "21",
                chartData: [
                  { name: "Sun", products: 400 },
                  { name: "Mon", products: 600 },
                  { name: "Tue", products: 500 },
                  { name: "Wed", products: 700 },
                  { name: "Thu", products: 400 },
                  { name: "Fri", products: 500 },
                  { name: "Sat", products: 450 }
                ]},
            message:"All Users Are Fetched"
        })
    }
    catch(err){
        console.log("Error Fetching All Products",err)
        res.status(500).json({
            success:false,
            message:"Error Fetching All Products"
        })
    }
}

module.exports = {getAllUsers , getAllProducts}