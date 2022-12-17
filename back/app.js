var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var equipeRouter = require('./routes/equipe');
var postRouter = require('./routes/post');
var matchRouter = require('./routes/match');
var parisRouter = require('./routes/paris');
var resultsRouter = require('./routes/results');
var commentRouter = require('./routes/comment');

require("dotenv").config();

var app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoose = require("mongoose");
mongoose
  .connect(process.env.mongoDbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion mongo db ok !"))
  .catch(() => console.log("connexion mongo db failed ! "));

  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/equipe', equipeRouter);
app.use('/post', postRouter);
app.use('/match', matchRouter);
app.use('/paris', parisRouter);
app.use('/results', resultsRouter);
app.use('/comment', commentRouter);



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
  res.status(err.status || 500).json(err);
  
});

module.exports = app;
