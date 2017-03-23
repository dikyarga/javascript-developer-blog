var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// Config
let dbConfig = require('./config/database')

// Mongoose
let mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)

// Passport
let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy;


let User = require('./models/user')


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    process.nextTick(function() {
        User.findOne({
            'local.email': email
        }, function(err, user) {
            if (err) {
                return done(err)
            }
            if (user) {
                return done(null, false, req.flash('signupMessage', 'email is already taken.'));
            } else {
                var newUser = new User();

                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);

                newUser.save(function(err) {
                    if (err) throw err;
                    return done(null, newUser);
                });
            }
        })
    })
}));

passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, function(req, email, password, done){
  User.findOne({
    'local.email': email
  }, function(err, user){
    if (err) {
      return done(err)
    }

    if (!user) {
      return done(null, false, req.flash('loginMessage', 'Gak ada user'))
    }

    if(!user.validPassword(password)){
      return done(null, false, req.flash('loginMessage', 'Password salah'))
    }

    return done(null, user)
  })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Route
var index = require('./routes/index');
var users = require('./routes/users');
let authAPI = require('./routes/apis/auth')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/auth', authAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
