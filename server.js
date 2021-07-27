const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(require('./controllers/'));

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}!`);
  sequelize.sync({ force: false });
});