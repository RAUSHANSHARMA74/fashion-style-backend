

const mongoose = require("mongoose")

const womensSchema = mongoose.Schema({
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

const WomensModel = mongoose.model("womensProducts", womensSchema)

module.exports = {WomensModel}