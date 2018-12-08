const db = require("../models");

module.exports = function(app) {
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
        // db.Agency.create(req.body).then(function(dbAgency) {
        //     res.json(dbAgency);
        // });
    });
};
