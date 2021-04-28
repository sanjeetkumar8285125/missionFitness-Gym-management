const express=require('express')
const app=express()
const path=require('path');
const bodyParser=require('body-parser');
const flash=require('connect-flash');
const session=require('express-session');
const config=require('./model/config')
const MongoStore = require('connect-mongo')
// require('./javascripts/app')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

const passport = require('passport');

const views=path.join(__dirname,'views')

app.set('view engine','ejs');
app.set('views',views);
app.use(express.static(path.join(__dirname,'public')));

app.use(
  session({
      secret: 'secret',
      resave: false,
      store:MongoStore.create({
        mongoUrl:config.dbURL,
        collectionName:'session',
        ttl: 10
      }),
      saveUninitialized: false,
      cookie:{maxAge:1000*24*60*60}
  })
);
require('./controller/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
  res.locals.session=req.session
  res.locals.user=req.user
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/',require('./routes/index'));
app.use('/',require('./routes/users'));

app.listen(process.env.PORT || 3000,()=>{
  console.log("server is up and running");
})
 