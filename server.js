//Requiring dependencies
const express = require("express");
const session = require("express-session");

//Requirin passport
const passport = require("./config/passport");

//Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

//Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Sessions to keep track of user's login status
app.use(
    session({ secret: "project two", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//requiring routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);

//Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on port" + PORT);
    });
});
