const mongoose = require("mongoose")

const createSchema  = new mongoose.Schema({

    name:{
        type: String,
        
    },

    mobile:{
        type: String,
        
        unique: true
    },

    email:{
        type: String,
        
    },

    street:{
        type: String,
        
    },

    locality:{
        type: String,
        
    },

    city:{
        type: String,
        
    },

    state:{
        type: String,
       
    },

    pincode:{
        type: String,
        
    },

    coordinatestype:{
        type: String,
        
    },

    coordinates:{
        type: Number,
        
    }
})

const Create = new mongoose.model("create", createSchema)
module.exports = Create