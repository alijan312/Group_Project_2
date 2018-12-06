// This is the middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the route
    if (req.user) {
        return next();
    }

    // If not, redirect them to the login page
    return res.redirect("/");
};
