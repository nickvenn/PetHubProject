require('dotenv').config();

module.exports = {
  MONGODB_URI: `mongodb://` + process.env.NAME + `:` + process.env.PASSWORD + `@ds113522.mlab.com:13522/petdatabase`,
    secretOrKey: "secret"
  }