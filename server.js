const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// For Passport
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/pets-api-routes.js")(app);
require("./routes/agency-api-routes.js")(app);
// require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
