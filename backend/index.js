require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');
const app = express();
const fileupload = require('express-fileupload');
const { config } = require('dotenv');

const PORT = process.env.PORT || config.get('serverPort');
app.use(express.json());
app.use(express.static('uploads'));
app.use(fileupload({}));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);
app.use('/api', router);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.API_URL); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(' Server is starting...'));
  } catch (e) {
    console.log(e);
  }
};
start();
