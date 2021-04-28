const express=require('express');
const route=express.Router();
const nodemailer=require('nodemailer');
const {google}=require('googleapis');
const OAuth2 = google.auth.OAuth2;
const jwt=require('jsonwebtoken');
const userModel=require('../model/schema/userSchema');
const productModel=require('../model/schema/productSchema');
const bcrypt=require('bcrypt');
const passport = require('passport');

const guest=require('../middleware/guest');
const auth=require('../middleware/auth');

const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";

route.get('/products',async(req,res,next)=>{
    const data=await productModel.find();
    console.log(data[0]);
    res.render('products',{products:data});

})
route.get('/cart',auth,(req,res,next)=>{

    res.render('cart');
})
route.get('/about',(req,res,next)=>{
    res.render('about');
})
route.get('/contact',(req,res,next)=>{
    res.render('contact');
})
route.get('/services',(req,res,next)=>{
    res.render('services');
})
route.get('/login',guest,(req,res,next)=>{
    res.render('login');
})
route.get('/register',guest,(req,res,next)=>{
    res.render('register');
})

route.get('/forgot',(req,res,next)=>{
    res.render('forgot');
})

route.post('/update-cart',(req,res)=>{
  // for the first time creating cart and adding basic object structure 
    if(!req.session.cart){
        req.session.cart={
            items:{},
            totalQty:0,
            totalPrice:0
        }
       
    }
    let cart=req.session.cart
    //check if item does not exist to cart
    if(!cart.items[req.body._id]){
cart.items[req.body._id]={
    item:req.body,
    qty:1
}
cart.totalQty=cart.totalQty + 1
cart.totalPrice=cart.totalPrice + req.body.price
     }
     else{
         cart.items[req.body._id].qty=cart.items[req.body._id].qty + 1
        cart.totalQty=cart.totalQty +1
        cart.totalPrice=cart.totalPrice + req.body.price
        }
    
    res.json({totalQty:req.session.cart.totalQty})
})
route.get('/Powder%20MJ%20Muscle%20Jockey,%201%20Kg,%20Non%20prescription',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Powder MJ Muscle Jockey',{data:data[0]});
})
route.get('/Boss%20Mass%20Protein%20Food%20Supplement',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Boss Mass Protein Food Supplement',{data:data[1]});
})
route.get('/Extra%20Gainer%20Food%20Supplement',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Extra Gainer Food Supplement',{data:data[2]});
})
route.get('/MRM,%20MSM%20Crystals,%201,000%20mg,%207.05%20oz%20200g',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('MRM MSM Crystals 1000 mg ',{data:data[3]});
})
route.get('/WEIGHT%20GAINER%20WITH%20MULTI%20VITAMINS%20AND%20MINERALS',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('WEIGHT GAINER WITH MULTI VITAMINS AND MINERALS',{data:data[4]});
})
route.get('/Dymatize%20Elite%20100%%20Whey%20Protein-5%20Lbs%20Gourmet%20Vanilla',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Dymatize Elite 100 Whey Protein - 5 Lbs',{data:data[5]});
})
route.get('/MuscleBlaze%20Whey%20Gold%20100%%20Whey%20Protein%20Isolate%20Rich%20Milk%20Chocolate,%202kg/4.4lb',async(req,res,next)=>{
    const data=await productModel.find();
    console.log(data[6])
    res.render('MuscleBlaze Whey Gold 100 Whey Protein Isolate ',{data:data[6]});
})
route.get('/GNC%20Pro%20Performance%20100%%20Whey%20Protein-4.4%20lbs,%202kg%20Creamy%20Strawberry',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('GNC Pro Performance 100 Whey Protein',{data:data[7]});
})
route.get('/GNC%20AMP%20Pure%20Isolate%20-%204.4%20lbs,%202kg%20Chocolate%20Frosting',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('GNC AMP Pure Isolate',{data:data[8]});
})

route.get('/Scitron%20HYDRO%20ISO%20Whey%2066%20Servings,%2025g%20Protein,%205g%20BCAAs,%200g%20Sugar%20-%204.4lbs%202kg%20Belgian%20Chocolate',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Scitron HYDRO ISO Whey',{data:data[9]});
})
route.get('/HealthyHey%20Organic%20Raw%20Pea%20&%20Brown%20Rice%20Protein%20Isolate-%201kg',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('HealthyHey Organic Raw Pea Brown Rice Protein Isolate',{data:data[10]});
})
route.get('/PRO2FIT%20Vegan%20Plant%20protein%20powder%20with%20Pea%20protein%20Brown%20Rice%20and%20Mungbean%20Protein',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('PRO2FIT Vegan Plant protein powder with Pea protein Brown Rice',{data:data[11]});
})
route.get('/Phab%20Protein%20Milkshake%20with%20Immunity%20Boosters%20%E2%80%93%2017g%20Milk%20Protein,%20No%20added%20sugar,%20Vitamin%20B12%20&%20Calcium%20Rich:%20Pack%20of%206x%20200ml',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Phab Protein Milkshake',{data:data[12]});
})
route.get('/MYFITNESS%20CrunchyvPeanut%20Butter%20510g%20Pack%20of%202',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('MYFITNESS Crunchy Peanut Butter 510g',{data:data[13]});
})
route.get('/Truly%20Lean%20Weightloss',async(req,res,next)=>{
    const data=await productModel.find();
    res.render('Truly Lean Weightloss',{data:data[14]});
})

//post methods

route.post('/register',(req,res,next)=>{
    var name=req.body.name;
    var lname=req.body.lname;
    var phone=req.body.phone;
    var email=req.body.email;
    var password=req.body.password;
    var confpassword=req.body.confpassword;
    let errors=[];
    if(!name || !lname || !phone || !email || !password || !confpassword){
errors.push({msg:'Please enter all fields'})
    }
    if(password!=confpassword){
        errors.push({msg:"Password don't match"})
    }
  if(errors.length >0){
      res.render('register',{errors:errors,name:name,lname:lname,phone:phone,email:email});
  }
  else{
    const oauth2Client = new OAuth2(
        "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com", // ClientID
        "OKXIYR14wBB_zumf30EC__iJ", // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w"
    });
    const accessToken = oauth2Client.getAccessToken()
   const token=jwt.sign({name,lname,phone,email,password},JWT_KEY,{expiresIn:'30m'});
   const CLIENT_URL='http://'+req.headers.host;

   const output = `
   <h2>Please click on below link to activate your account</h2>
   <p>${CLIENT_URL}/activate/${token}</p>
   <p><b>NOTE: </b> The above activation link expires in 30 minutes.</p>
   `;
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            type: "OAuth2",
            user: "nodejsa@gmail.com",
            clientId: "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com",
            clientSecret: "OKXIYR14wBB_zumf30EC__iJ",
            refreshToken: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w",
            accessToken: accessToken
        }
    })
    const mailOptions={
        from: '"Youth Fitness " <nodejsa@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Account Verification: NodeJS Auth ✔", // Subject line
        generateTextFromHTML: true,
        html: output, // html body
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            req.flash('error_msg','Something went wrong on our end. Please register again.')
            res.redirect('/login');
        }
        else{
            console.log('mail sent %s',info.response);
            req.flash('success_msg','Activation link sent to email ID. Please activate to log in.')
            res.redirect('/login');
        }
        res.redirect('/login');
    })
  }
})

route.get('/activate/:token',(req,res,next)=>{
    const token=req.params.token;
    if(token){
    jwt.verify(token,JWT_KEY,(err,decodedToken)=>{
        if(err){
            req.flash('error_msg',"Incorrect or expired link! Please register again")
            res.redirect('/register'); //register aayega
        }
        else{
            var name=decodedToken.name;
            var lname=decodedToken.lname;
            var phone=decodedToken.phone;
            var email=decodedToken.email;
            var password=decodedToken.password;
            var encryptpassword=bcrypt.hashSync(password,10);
            const userdata=new userModel({
                name:name,
                lname:lname,
                phone:phone,
                email:email,
                password:encryptpassword
            })
userdata.save((err,doc)=>{
    if(err){
        req.flash("error_msg","Something went wrong on our side");
        res.redirect("/login");
    }
    else{
        req.flash('success_msg','Account activated. You can now log in.')
         res.redirect('/login')
    }
})
        }
       
    })
    }
})

route.post('/forgot',(req,res,next)=>{
    var email=req.body.email;
    console.log(email)
    let errors=[];
    if(!email){
errors.push({msg:'please enter email id'});
    }
    if(errors.length > 0){
        res.render('forgot',{errors:errors})
    }
    else{
   const userdata =userModel.findOne({email:email})
   userdata.exec((err,user)=>{
    if(!user){
        errors.push({msg:'User with Email ID does not exist!'})
    res.render('forgot',{errors:errors});
    }
    else{
        const oauth2Client = new OAuth2(
            "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com", // ClientID
            "OKXIYR14wBB_zumf30EC__iJ", // Client Secret
            "https://developers.google.com/oauthplayground" // Redirect URL
        );

        oauth2Client.setCredentials({
            refresh_token: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w"
        });
        const accessToken = oauth2Client.getAccessToken()
       const token= jwt.sign({id:user._id},JWT_RESET_KEY,{expiresIn:'30m'});
       const CLIENT_URL="http://" +req.headers.host;
       const output=` <h2> Please click on below link to reset your account password</h2>
               <p>${CLIENT_URL}/forgot/${token}</p>
               <p><b>NOTE: </b> The activation link expires in 30 minutes.</p>
               `;
               user.updateOne({resetlink:token},(err,success)=>{
                if(err){
                    errors.push({ msg: 'Error resetting password!' });
                    res.render('forgot', {
                        errors,
                    });
                   }
               else{
       const transport=nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: "nodejsa@gmail.com",
            clientId: "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com",
            clientSecret: "OKXIYR14wBB_zumf30EC__iJ",
            refreshToken: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w",
            accessToken: accessToken
        },
       })
       const mailOptions = {
        from: '" Mission Fitness Auth" <nodejsa@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Account Password Reset: NodeJS Auth ✔", // Subject line
        html: output, // html body
    };
       transport.sendMail(mailOptions,(err,info)=>{
if(err){
    console.log(err);
    req.flash('error_msg','Something went wrong on our end! Try again');
    res.redirect('/forgot');
}
else{
    console.log("mail sent %s",info.response)
    req.flash('success_msg','Password reset link sent to email ID. Please follow the instructions.')
    res.redirect('/login');
}
       })
    }
    })
    }
   })
}
})

route.get('/forgot/:token',(req,res,next)=>{
var token=req.params.token;
if(token){
jwt.verify(token,JWT_RESET_KEY,(err,decodedToken)=>{
    if(err){
        req.flash('error_msg','Incorrect or expired link! Please try again')
        res.redirect('/forgot');
    }
    else
    {
        const id=decodedToken.id;
        const userdata=userModel.findById(id)
        userdata.exec((err,doc)=>{
            if(err){
                req.flash('error_msg','User with email ID does not exist! Please try again.')
                res.redirect('/login');
            }
            else{
                res.redirect(`/reset/${id}`);
            }
        })
    }
})
}
})
route.get('/reset/:id',(req,res,next)=>{
    res.render('reset',{id:req.params.id});
})
route.post('/reset/:id',(req,res,next)=>{
    const password=req.body.password;
    const confpassword=req.body.confpassword;
    var id=req.params.id
    if(!password || !confpassword){
        req.flash('error_msg','Please enter all field');
        res.redirect(`/reset/${id}`);
    }
    if(password !=confpassword){
        req.flash('error_msg','Password did not match!!')
        res.redirect(`/reset/${id}`);
    }
    else{
        var encryptpassword=bcrypt.hashSync(password,10);
        userModel.findByIdAndUpdate(id,{password:encryptpassword},(err,doc)=>{
            if(err){
                req.flash('error_msg','Error resetting password!');
                res.redirect(`/reset/${id}`);
            }
            else{
                req.flash('success_msg','Password updated Successfully');
                res.redirect('/login');
            }
        })
    }
})
route.post('/login',(req,res,next)=>{
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
})



route.post('/contact',(req,res,next)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var message=req.body.message;
    const oauth2Client = new OAuth2(
        "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com", // ClientID
        "OKXIYR14wBB_zumf30EC__iJ", // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w"
    });
    const accessToken = oauth2Client.getAccessToken()
   

   const output = `
   <h2>${phone}</h2>
   <p><b>${name}</b></p>
   <p><b>${email}</b></p>
   <p>${message}</p>

   `;

   const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: "OAuth2",
        user: 'nodejsa@gmail.com',
        clientId: "173872994719-pvsnau5mbj47h0c6ea6ojrl7gjqq1908.apps.googleusercontent.com",
        clientSecret: "OKXIYR14wBB_zumf30EC__iJ",
        refreshToken: "1//04T_nqlj9UVrVCgYIARAAGAQSNwF-L9IrGm-NOdEKBOakzMn1cbbCHgg2ivkad3Q_hMyBkSQen0b5ABfR8kPR18aOoqhRrSlPm9w",
        accessToken: accessToken
    },
});

// send mail with defined transport object
const mailOptions = {
    from: `"E-Learning" <${email}>`, // sender address
    to: 'sanjeetkumar8285125@gmail.com', // list of receivers
    subject: "Mission Fitness Customer Complain", // Subject line
    generateTextFromHTML: true,
    html: output, // html body
};
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
         req.flash('error_msg', 'Something went wrong on our end. Please send message again.');
        res.redirect('/contact');
    }
    else{
        console.log('Mail sent %s',info.response);
        req.flash('success_msg','message sent successfully !')
        res.redirect('/contact');
    }
    res.redirect('/contact');
})
})


module.exports=route

