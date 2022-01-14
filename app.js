const createError = require('http-errors');
const express = require('express');
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
<<<<<<< HEAD
const checkoutRouster = require('./components/checkout');
const accountRouster = require('./components/accounts');
=======
const checkoutRouter = require('./components/checkout');
const accountRouter = require('./components/accounts/accountModel/accountRouter');
>>>>>>> d17821c (Fix accounts page)
const session = require("express-session");



// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(session({secret: process.env.SESSION_SECRET}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'hbs');

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
<<<<<<< HEAD
app.use('/checkout',checkoutRouster);
app.use('/accounts',accountRouster);
=======
app.use('/checkout',checkoutRouter);
app.use('/accounts',accountRouter);
>>>>>>> d17821c (Fix accounts page)

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
