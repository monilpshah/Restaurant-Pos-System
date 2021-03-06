var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dish=require('./routes/dish_route');
var cuisine=require('./routes/cuisine_route');
var dishcuisine=require('./routes/getdishcuisine_route');
var bill=require('./routes/bill_route');
var billdetails=require('./routes/bill_details_route');
var pastorder=require('./routes/pastorder_route');
var pastorderdetails=require('./routes/pastorderdetails_route');
var login =require('./routes/login_route');
var signup = require('./routes/signup');
var forgetpassword =require('./routes/forgetpassword');
var admin=require('./routes/adminlogin_route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dish',dish);
app.use('/cuisine',cuisine);
app.use('/dishcuisine',dishcuisine);
app.use('/bill',bill);
app.use('/billdetails',billdetails);
app.use('/pastorder',pastorder);
app.use('/pastorderdetails',pastorderdetails);
app.use('/login',login);
app.use('/signup',signup);
app.use('/forgetpassword',forgetpassword);
app.use('/admin',admin);

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
