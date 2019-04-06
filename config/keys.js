require('dotenv').config();

module.exports = {
    mongoURI: `mongodb://nickvenn:United32@ds023458.mlab.com:23458/heroku_kt9dchg0`,
    mongoURI2: `mongodb://heroku_8fg33z8x:m071t2re3hn35ofrhg5uro2h07@ds127983.mlab.com:27983/heroku_8fg33z8x`,
    //mongoURI3: ENV['MONGODB_URI'],
    mongoURILocal: `mongodb://localhost/pethub`,
    secretOrKey: "secret"
  };