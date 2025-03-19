const express = require('express')
const router = express.Router();
const {userRegister,userLogin,getUserProfile,getProfile,home} = require("../controllers/userController")

router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/profile/:id',getUserProfile)
router.get('/profile',getProfile)
router.get('/',home)

module.exports = router;