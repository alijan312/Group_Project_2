// Requiring our models and passport
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/profile");
    });

    app.post("/api/signup", function(req, res) {
        db.Agency.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                console.log(err);
                res.json(err);
            });
    });
};
