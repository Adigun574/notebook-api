const express = require('express')
const UsersController = require('../controllers/users')


const router = express.Router()

router.get('/',(req,res)=>{
    UsersController.getUsers(req,res)
})

//REGISTER A NEW USER
router.post('/register',(req,res)=>{
    UsersController.registerUser(req,res)
})

//AUTHENTICATE A USER
router.post('/authenticate',(req,res)=>{
    UsersController.authenticateUser(req,res)
})
module.exports = router