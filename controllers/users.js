const User = require('../models/user')
const bcrypt = require('bcryptjs')

getUsers = (req,res)=>{
    res.send('Hello from get users')
}

registerUser = (req,res)=>{
    const newUser = {
        name:req.body.name,
        email:req.body.email,
        password:null
    }
    bcrypt.genSalt(10)
        .then(salt=>{
            bcrypt.hash(req.body.password,salt)
                .then(hash=>{
                    newUser.password = hash
                    User.create(newUser)
                        .then(data=>{
                            res.status(201).json({success:true,message:'created'})
                        })
                        .catch(err=>{
                            res.status(400).json({success:false,message:'user not created'})
                        })                    
                })
                .catch(err=>{
                    res.status(400).json({success:false,message:'user not created'})
                })
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'user not created'})
        })

}

authenticateUser = async (req,res)=>{
    const user = await User.find({email:req.body.email})
    if(user.length<1){
        return res.status(404).json({success:false,message:'user not found'})
    }
    else{
        bcrypt.compare(req.body.password,user[0].password)
            .then(result=>{
                if(result){
                    res.status(200).json({success:true,message:'user authenticated'})
                }
                else{
                    res.status(404).json({success:false,message:'wrong credentials'})
                }
            })
            .catch(err=>{
                res.status(404).json({success:false,message:'user not authenticated'})
            })
    }
}

const UsersController = {getUsers, registerUser, authenticateUser}

module.exports = UsersController

