require('dotenv').config();

module.exports = {
    mongoURI: `mongodb://` + process.env.NAME + `:` + process.env.PASSWORD + `@ds023458.mlab.com:23458/heroku_kt9dchg0`,
    secretOrKey: "secret"
  };