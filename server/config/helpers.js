var jwt = require('jwt-simple');

module.exports = {
  errorLogger: function (error, req, res, next) {
    // log the error then send it to the next middleware in
    console.log('error handler1');

    console.error(error.stack);
    next(error);
  },
  errorHandler: function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    console.log('error handler2', req);
    res.status(500).send({error: error.message});
  },

  decode: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var user;
    console.log('decoder');

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }

    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }

  }
};
