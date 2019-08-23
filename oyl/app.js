const path = require('path');
// const fs = require('fs');
// const https = require('https');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = `mongodb://localhost:27017/${process.env.MONGO_DEFAULT_DB}`;

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
// const privateKey = fs.readFileSync('server.key');
// const certificate = fs.readFileSync('server.cert');

app.set('view engine', 'ejs');
app.set('views', 'views');

const authRoutes = require("./routes/auth");
const kiraviRoutes = require("./routes/kiravi");

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findByPk(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(authRoutes);
app.use(kiraviRoutes);

app.use(errorController.get404);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {

    // https.createServer({key:privateKey,cert:certificate},app).listen(process.env.PORT || 3030);
    app.listen(process.env.PORT,3030);
  })
  .catch(err => {
    console.log(err);
  });
