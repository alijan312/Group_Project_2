// const exports = (module.exports = {});

module.exports.signup = function(req, res) {
    res.render("signup");
};

module.exports.signin = function(req, res) {
    res.render("signin");
};
