module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {});
    });

    app.get("/adoption", function(req, res) {
        res.render("adoption", {});
    });

    app.get("/add-pet", function(req, res) {
        res.render("add-pet", {});
    });
};
