module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", { title: "Who Saves Who!" });
    });

    app.get("/adoption", function(req, res) {
        res.render("adoption", { title: "Adotp Don't Shop" });
    });

    app.get("/add-pet", function(req, res) {
        res.render("add-pet", { title: "Add Fur Baby" });
    });
};
