const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", { title: "Who Saves Who!" });
    });

    app.get("/adoption", function(req, res) {
        db.Pets.findAll({}).then(function(petData) {
            res.render("adoption", { petInfo: petData });
        });
    });

    app.get("/agency", function(req, res) {
        db.Agency.findAll({}).then(function(agencyData) {
            res.render("view-agency", { agencyInfo: agencyData });
        });
    });

    app.get("/add-pet", function(req, res) {
        db.Agency.findAll({}).then(function(agencyData) {
            db.Species.findAll({}).then(function(speciesData) {
                res.render("add-pet", {
                    speciesInfo: speciesData,
                    agencyInfo: agencyData
                });
            });
        });
    });

    app.get("/add-agency", function(req, res) {
        res.render("add-agency", { title: "Agency" });
    });
};
