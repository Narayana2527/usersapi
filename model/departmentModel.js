const mongoose = require("mongoose");
const doctorsSchema = require('./doctorsModel')

const departmentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    doctors:{type:doctorsSchema}
},{timestamps:true})

module.exports = mongoose.model("Department",departmentSchema)