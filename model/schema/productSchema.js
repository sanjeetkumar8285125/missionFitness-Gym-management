const { Schema } = require('mongoose');
const mongoose=require('../connection');
const schema=mongoose.schema;
const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const productModel=mongoose.model('product',productSchema);
module.exports=productModel;