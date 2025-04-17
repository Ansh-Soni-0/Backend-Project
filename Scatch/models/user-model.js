const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname : {
        type:String
    },
    email : {
        type:String
    },
    password : {
        type:String
    },
    cart : {
        type:Array,
        default: []
    },
    isadmin : {
        type: Boolean
    },
    orders : {
        type : Array,
        default : []
    },
    contact :{
        type:Number
    },
    picture :{
        type : String
    }
})

const User = mongoose.model("user" , userSchema)

module.exports = User