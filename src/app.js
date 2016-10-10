import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { error } from './utils/responseJSON';
import setupRoute from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

setupRoute(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
  res.json(error(-1, 'Not Found'));
});

// error handler
app.use((err, req, res, next) => {
  let msg = err.message;

  // development will print stacktrace
  if (app.get('env') === 'development') {
    msg = err.stack;
  }
  res.status(500);
  res.json(error(-1, msg));
});

module.exports = app;
