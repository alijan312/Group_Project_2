const authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
    app.get("/signup", authController.signup);

    app.get("/signin", authController.signin);

    app.post(
        " /signup",
        passport.authenticate("local-signup", {
            successRedirect: "/dashboard",

            failureRedirect: "/signup"
        })
    );
};
