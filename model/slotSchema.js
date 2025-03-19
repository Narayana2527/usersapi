const mongoose = require("mongoose");
const PatientInfoSchema = require("./patientInfo");

const SlotSchema = new mongoose.Schema({
    "9:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "9:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "10:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "10:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "11:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "12:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "12:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "2:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "2:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "3:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "3:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "4:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "4:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "5:00": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema },
    "5:30": { status: { type: String, default: "available" }, patientInfo: PatientInfoSchema }
}, { _id: false });

module.exports = mongoose.model("Slot",SlotSchema);
