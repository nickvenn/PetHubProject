require('dotenv').config();
module.exports = {
  mongoURI: `mongodb://`+ process.env.NAME + `:` + process.env.PASSWORD + `@ds113522.mlab.com:13522/petdatabase` 
};