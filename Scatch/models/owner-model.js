const mongoose = require("mongoose")

const ownerSchema = mongoose.Schema({
    fullname : {
        type:String
    },
    email : {
        type:String
    },
    password : {
        type:String
    },
    products : {
        type : Array,
        default : []
    },
    picture :{
        type : String
    },
    gstin :{
        type:String
    }
})


const User = mongoose.model("user" , ownerSchema)

module.exports = User