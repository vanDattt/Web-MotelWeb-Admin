const createError = require('http-errors');
const express = require('express');
const upload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
//dotenv.config({path: '.env'});
//const mydb = require('./server');
const passport= require('./auth/passport');

const authRouter = require('./components/auth/authRouter');
const usersRouter = require('./routes/users');
const roomsRouter = require('./components/rooms/roomModel/roomRouter');
const searchroomsRouter =  require('./components/rooms/search');
const servicesRouter = require('./components/services/serviceModel/serviceRouter');
const searchservicesRouter =  require('./components/services/search');
const checkoutRouter = require('./components/checkout');
const accountRouter = require('./components/accounts/accountModel/accountRouter');

const session = require("express-session");



// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(session({secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'hbs');
app.use(upload())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', authRouter);

app.use((req, res, next) =>{
  if(!req.user)
  {
    res.redirect('/');
  }else{
    next();
  }
});

app.use('/users', usersRouter);
app.use('/rooms',roomsRouter);
app.use('/searchroom',searchroomsRouter);
app.use('/services',servicesRouter);
app.use('/searchservice',searchservicesRouter);
app.use('/checkout',checkoutRouter);
app.use('/accounts',accountRouter);
app.get('/uploadroom',(req,res) => {
  res.sendFile(__dirname+'/upload-room-pic.html')
})
app.post('/uploadroom', (req, res) => {
  if(req.files){
    var file = req.files.file
    var filename = file.name
    file.mv('./public/images/room-images/'+filename,function(err){
      if(err){
        res.send(err)
      } else{
        res.send("file uploaded")
      }
    })
  }
})
app.get('/uploadservice',(req,res) => {
  res.sendFile(__dirname+'/upload-service-pic.html')
})
app.post('/uploadservice', (req, res) => {
  if(req.files){
    var file = req.files.file
    var filename = file.name
    file.mv('./public/images/service-images/'+filename,function(err){
      if(err){
        res.send(err)
      } else{
        res.send("file uploaded")
      }
    })
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
