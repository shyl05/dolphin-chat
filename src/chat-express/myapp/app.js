var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors')
var favicon = require('serve-favicon');
var logger = require('morgan');


// Routes

// var indexRouter = require('./routes/index');
var users = require('./routes/users');
var groups = require('./routes/group');
var chats = require('./routes/chats')

var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// CORS policy

app.use(express.json())
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/users',users);
app.use('/group',groups);
app.use('/chats',chats);




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
const port=process.env.PORT ||3088

io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});


// using database from config
const configureDB=require('./config/database');
configureDB();

app.listen(port,()=>{
  console.log("server is running on port",port)
})