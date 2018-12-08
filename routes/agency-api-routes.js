const db = require("../models");

module.exports = function(app) {
    app.get("/api/agencies", function(req, res) {
        db.Agency.findAll({}).then(function(dbAgency) {
            res.json(dbAgency);
        });
    });

    app.get("/api/agencies/:id", function(req, res) {
        db.Agency.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbAgency) {
            res.json(dbAgency);
        });
    });

    app.post("/api/agencies", function(req, res) {
        const agency = req.body;
        console.log("New Agency:");
        console.log(agency);

        db.Agency.create({
            agencyName: agency.agencyName,
            agencyPhone: agency.agencyPhone,
            agencyAddress: agency.agencyAddress,
            agencyCity: agency.agencyCity,
            agencyState: agency.agencyState,
            agencyZip: agency.agencyZip,
            agencyContact: agency.agencyContact,
            contactName: agency.contactName,
            contactEmail: agency.contactEmail,
            contactPswd: agency.contactPswd,
            agencyQuestion4: agency.agencyQuestion4
        }).then(function(dbAgency) {
            res.json(dbAgency);
        });
    });

    app.put("/api/agencies", function(req, res) {
        const agency = req.body;
        console.log("Update Agency:");
        console.log(agency);

        db.Agency.update({
            agencyName: agency.agencyName,
            agencyPhone: agency.agencyPhone,
            agencyAddress: agency.agencyAddress,
            agencyCity: agency.agencyCity,
            agencyState: agency.agencyState,
            agencyZip: agency.agencyZip,
            agencyContact: agency.agencyContact,
            contactName: agency.contactName,
            contactEmail: agency.contactEmail,
            contactPswd: agency.contactPswd,
            agencyQuestion4: agency.agencyQuestion4
        }).then(function(dbAgency) {
            res.json(dbAgency);
        });
    });

    app.delete("/api/agencies/:id", function(req, res) {
        db.Agency.destroy({
            where: {
                id: req.params.id
            }
        }).then.json(function(dbAgency) {
            res.json(dbAgency);
        });
    });
};
