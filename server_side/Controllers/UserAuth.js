const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User_auth = require('../Schemas/User_auth')

exports.register = async (req,res,next) => {
    try{
        const {username,email,password} = await req.body
        const hashedpass = await bcrypt.hash(password,10)
        const New_User = await new User_auth({
            username: username,
            email: email,
            password: hashedpass
        })
        console.log(New_User)
        New_User.save().then(()=>{
            console.log('New_User saved successfully')
            return res.status(201).end()
        }).catch(err => {
            return res.status(500).json('Choose Another Email')
        })
    }catch{
        console.log('error  creating account')
    }
}


exports.login = async (req,res,next) => {
    try{
        const {email,password} =  await req.body
        User_auth.findOne({email:email}).then(user => {
            if(!user){
                return res.status(401).json('User Not Found')
            }
           bcrypt.compare(password, user.password).then(valid=>{
              if(!valid){
                return res.status(401).json('Password is incorrect')
              }
              const token = jwt.sign({userid:user._id,username:user.username},'secret')
               res.cookie('jwt',token,{
                httpOnly:true,
                sameSite: "none",
                secure:false

              })
              return res.status(200).json({
                username:user.username
              })
           })
        })
    }catch{
        console.log('err')
    }
    // res.status(200).end()
}



// User_auth.collection.deleteMany({})