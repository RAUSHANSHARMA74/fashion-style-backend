
const express = require("express")
const carts = express.Router()
const {cartModel} = require("../modelFile/cartModel")


//GET USER CART PRODUCTS
carts.get("/", async (req, res)=>{
    try {
       let data = await cartModel.find()
       res.send(data)
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})

carts.post("/addCart", async (req, res)=>{
    try {
        let add = new cartModel(req.body)
        await add.save()
        req.send({msg:"Added to cart"})
    } catch (error) {
        console.log("something went wrong in admin products data")
    }
})

carts.delete("/delete/:id", async (req, res)=>{
    try {
        let ID = req.body.id
       await cartModel.findByIdAndDelete({_id:ID})
       res.send({msg:"cart product is deleted"})
    } catch (error) {
        console.log("something went wrong in delete notes")
    }
})


module.exports = {carts}