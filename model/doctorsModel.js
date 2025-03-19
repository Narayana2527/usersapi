const mongoose = require("mongoose");
const SlotSchema = require('./slotSchema')
const doctorsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    specialty:{
        type:String,
        required:true
    },
    departmentId:{type:mongoose.Schema.Types.ObjectId,ref:"Department"},
    image:{
        type:String,
        required:true
    },
    slots:[{
        date:{type:String, required:true},
        slot:{type:SlotSchema}
        
    }]
},{timestamps:true})

module.exports = mongoose.model("Doctor",doctorsSchema)