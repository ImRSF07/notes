const express = require('express');
const app = express();
var cors = require('cors');
const routes = require('./routes');
const passport = require('passport');

// const Jwt = require('./lib/authMiddleware');

//set up middlewares
app.use(express.json());

app.use(cors());

// setup passport for route authentication
// passport.use(Jwt());

//setup routes
routes(app);

// error middleware
app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: err.message, name: err.name });
  }
  next();
});

// return generic message to catch unregistered routes
app.get('*', (req, res) => {
  res.send({
    message: 'API is Up and Running',
    status: 'success',
  });
});

module.exports = app;
