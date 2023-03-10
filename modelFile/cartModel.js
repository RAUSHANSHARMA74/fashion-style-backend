
const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    title : String,
    description : String,
    discount : String,
    brand : String,
    image : Array,
    color : String,
    stock : String,
    category : String,
    price : String,
    rating : Number,
    size : String,
})

const cartModel = mongoose.model("cartProducts", cartSchema)

module.exports = {cartModel}