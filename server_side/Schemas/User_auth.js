const mongoose = require('mongoose');

const User_auth = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{versionKey:false,timestamps:true})


module.exports = mongoose.model('User_Auth',User_auth)