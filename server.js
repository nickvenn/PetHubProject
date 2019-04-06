const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// DB Config
const db = require("./config/keys").MONGODB_URI;
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:United32@ds139844.mlab.com:39844/heroku_3vzql241",
{
    useCreateIndex: true,
    useNewUrlParser: true
}
).then(() => console.log("MONGODB CONNECTED")).catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


