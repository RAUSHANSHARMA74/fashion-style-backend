
const mongoose = require("mongoose")

const mensSchema = mongoose.Schema({
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

const MensModel = mongoose.model("mensProducts", mensSchema)

module.exports = {MensModel}