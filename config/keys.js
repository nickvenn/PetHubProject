require('dotenv').config();

module.exports = {
    mongoURI: `mongodb://` + process.env.NAME + `:` + process.env.PASSWORD + `@ds031975.mlab.com:31975/heroku_kc4g9tzs`,
    secretOrKey: "secret"
  }