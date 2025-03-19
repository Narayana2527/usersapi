const User = require('../model/userModel');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') 

dotenv.config()

const generateToken = (id)=>{
   return jwt.sign({id},process.env.JWT_Secret_Key,{expiresIn:"1d"})
}

module.exports ={
    userRegister: async(req,res)=>{
        const {name,email,password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists) return res.status(400).json({message:"User alreaday exists"});

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashedPassword});
        if(user){
            res.status(200).json({_id:user.id,name:user.name,email:user.email,token:generateToken(user.id)})
        }
        else{
            res.status(400).json({message:"Invalid user data"})
        }
    },
    userLogin:async (req,res)=>{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user &&(await bcrypt.compare(password,user.password))){
            res.status(200).json({_id:user.id,name:user.name,email:user.email,token:generateToken(user.id)})
        }
        else{
            res.status(401).json({message:"Invalid user data or password"})
        }
    },
    getUserProfile: async (req, res) => {
        const userId = req.params.id;
    
        try {
            const user = await User.findById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Server error", error });
        }
    },
    getProfile: async (req,res)=>{
        try {
            const users = await User.find();
            if (users) {
                res.json(users);
            } else {
                res.status(404).json({ message: "Users not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Server error", error });
        }
    },
    home:async(req,res)=>{
        res.status(200).json({message:"Welcome to server"})
    }
    
}