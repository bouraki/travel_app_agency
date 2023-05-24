const mongoose = require('mongoose');

const Email_listing = mongoose.Schema({
    email:{type:String}
},{timestamps:true,versionKey:false})

module.exports = mongoose.model('Email_listing',Email_listing)