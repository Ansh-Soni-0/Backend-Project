const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image : {
        type:String
    },
    name : {
        type:String
    },
    price : {
        type:Number
    },
    discount : {
        type:Number,
        default: 0
    },
    bgcolor : {
        type: String
    },
    panelcolor : {
        type : String
    },
    textcolor :{
        type:String
    }
})


const Product = mongoose.model("product" , productSchema)

module.exports = Product