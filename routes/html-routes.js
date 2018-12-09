module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {});
    });

    app.get("/adoption", function(req, res) {
        res.render("adoption", {});
    });
};
