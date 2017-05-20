import express from 'express';
import expressValidator from 'express-validator';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import favicon from 'serve-favicon';
import v1API from './api/v1';
import cors from 'cors';
import {User} from '../models';

let app = express();
app.use(cors());
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('common'));
}
app.use(bodyParser.json());
app.use(expressValidator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/v1', v1API);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

passport.serializeUser((user, next) => {
  next(null, user);
});

passport.deserializeUser(function(user, next) {
  User.findOne({
    where: {
      username: user.username
    }
  }).then(function(user) {
    next(null, user);
  });
});

// catch 404 and forward to error handler
app.locals.pretty = true;

if (app.get('env') == 'production') {
  let compression = require('compression');
  app.use(compression());
}

export {app};
