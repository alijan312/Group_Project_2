const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Setting up passport Local Strategy so we can authenticate users by username/email and password

passport.use(
    new LocalStrategy(
        // User will sign in using an email
        {
            usernameField: "email"
        },
        (email, password, done) => {
            // When a user tries to sign in, this code runs
            db.Agency.findOne({
                where: {
                    email: email
                }
            }).then(function(dbAgency) {
                // If there is no user with given email
                if (!dbAgency) {
                    return done(null, false, {
                        message: "Incorrect email."
                    });
                }
                // If there is a user with given email but given password is incorrect
                else if (!dbAgency.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                // If none of the above conditions met, return the user
                return done(null, dbAgency);
            });
        }
    )
);

// Serialize and Deserialize the user in order to keep authentication state accross HTTP requests
passport.serializeUser(function(agency, cb) {
    cb(null, agency);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// Exporting passport
module.exports = passport;
