const mongoose = require('mongoose'); 

const Products = mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true},
   price:{type:Number,required:true},
   image:{type:String,required:true},
   // location:{type:String,required:true},
   // country:{type:String,required:true},
   // adutls:{type:Number},
   // flag:{type:String,required:true},
   // nights:{type:Number},
   // plane:{type:Boolean},
   // car:{type:Boolean},
   

},{versionKey:false,timestamps:true}) 

module.exports = mongoose.model('Products', Products)