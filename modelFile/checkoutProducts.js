
const mongoose = require("mongoose")

const checkoutProductsSchema = mongoose.Schema({
    titel : String,
    brand : String,
    img : String,
    color : String,
    price : Number,
    rating : Number,
    size : String,
})

const CheckoutProductsModel = mongoose.model("checkoutProducts", checkoutProductsSchema)

module.exports = {CheckoutProductsModel}