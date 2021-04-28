const mongoose=require('mongoose');
const config=require('./config');
mongoose.connect(config.dbURL,{poolSize:config.poolsize,useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
    if(err){
        console.log("error in mongo connection",err);
    }
    else{
        console.log("db connection created");
    }
})
module.exports=mongoose;