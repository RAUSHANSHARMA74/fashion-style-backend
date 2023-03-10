
const express = require("express")
const admin = express.Router()
const {UsersSingupModel} = require("../modelFile/usersModel")
const {MensModel} = require("../modelFile/mensModel")
const {WomensModel} = require("../modelFile/womensModel")
const {CheckoutProductsModel} = require("../modelFile/checkoutProducts")


//GET ALL products DATA
admin.get("/allProducts", async (req, res)=>{
    try {
        const mensProducts = await MensModel.find()
        const womensProducts = await WomensModel.find()
        const allProducts = [...mensProducts, ...womensProducts]
        res.send(allProducts)
    } catch (error) {
        console.log("something went wrong in admin get all products data")
    }
})


//GET ALL USERS DATA
admin.get("/users", async (req, res)=>{
    try {
        const usersData = await UsersSingupModel.find()
        res.send(usersData)
    } catch (error) {
        console.log("something went wrong in admin get users data")
    }
})



//GET WHICH USER ADDED IN CART
admin.get("/", async (req, res)=>{
    try {
        
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//GET CHECKOUT PRODUCT WHICH USER 
admin.get("/checkoutProducts", async (req, res)=>{
    try {
        const checkout = await CheckoutProductsModel.find()
        res.send(checkout)
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//GET ONLY MENS DATA
admin.get("/mensProducts", async (req, res)=>{
    try {
        const mensData = await MensModel.find()
        res.send(mensData)
    } catch (error) {
     console.log("something went wrong in get mens data")   
    }
})

//GET ONLY WOMENS DATA
admin.get("/womensProducts", async (req, res)=>{
    try {
        const womensData = await WomensModel.find()
        res.send(womensData)
    } catch (error) {
     console.log("something went wrong in get mens data")   
    }
})


//ADD PRODUCTS IN MENS
admin.post("/addMen", async (req, res)=>{
    try {
        const addNewProducts = new MensModel(req.body)
        await addNewProducts.save()
        res.send({msg:"men Products is added"})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//ADD PRODUCTS IN WOMENS
admin.post("/addWomen", async (req, res)=>{
    try {
        const addNewProducts = new WomensModel(req.body)
        await addNewProducts.save()
        res.send({msg:"women Products is added"})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//UPDATE MENS PRODUCTS 
admin.patch("/updateMens/:id", async (req, res)=>{
    try {
        let data =  req.body
        let obj = {}
        for(let key in data){
            if(data[key]!=""){
               obj[key]=data[key]
            }
        }
        const id = req.params.id
        await MensModel.findByIdAndUpdate({_id:id}, obj)
        res.send({msg:"men updated"})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//UPDATE WOMENS PRODUCTS 
admin.patch("/updateWomens/:id", async (req, res)=>{
    try {
        const id = req.params.id
        await WomensModel.findByIdAndUpdate({_id:id}, req.body)
        res.send({msg:"women updated"})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})



//DELETE USERS DATA
admin.delete("/usersDelete/:id", async (req, res)=>{
    try {
        const id = req.params.id
        const user = await UsersSingupModel.find({_id:id})
        await UsersSingupModel.findByIdAndDelete({_id:id})
        res.send({msg: `user ${user[0].name} is deleted `})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})




//DELETE MENS PRODUCTS
admin.delete("/menDelete/:id", async (req, res)=>{
    try {
        const id = req.params.id
        const men = await MensModel.find({_id:id})
        await MensModel.findByIdAndDelete({_id:id})
        res.send({msg: `men ${men[0].brand} is deleted `})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})


//DELETE WOMENS PRODUCTS
admin.delete("/womenDelete/:id", async (req, res)=>{
    try {
        const id = req.params.id
        const women = await WomensModel.find({_id:id})
        await WomensModel.findByIdAndDelete({_id:id})
        res.send({msg: `women ${women[0].brand} is deleted `})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})



module.exports = {admin}