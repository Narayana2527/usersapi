const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const PORT = 4000;

dotenv.config();
connectDB();
// Routes
app.use("/api/user",userRoutes)
// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Welcome to server"})
// })

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})