const express=require('express');
const route=express.Router();

route.get('/',(req,res,next)=>{
    res.render('index');
})

route.get('/logout',(req,res,next)=>{
   req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
})
module.exports=route;