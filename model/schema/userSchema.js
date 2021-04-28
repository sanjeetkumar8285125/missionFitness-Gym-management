const { Mongoose } = require('mongoose');
const mongoose=require('../connection');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        lowercase:true,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    verified: {
        type: Boolean,
        default: false
      },
      resetLink: {
        type: String,
        default: ''
      }
},{timestamps:true});
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;
