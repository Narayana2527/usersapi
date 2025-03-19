const mongoose = require("mongoose");

const PatientInfoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    treatment:{type:String,required:true},
    message:{type:String,required:true}
})

module.exports = mongoose.model("patientInfo",PatientInfoSchema)