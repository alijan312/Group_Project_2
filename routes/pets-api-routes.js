const db = require("../models");

module.exports = function(app) {
    app.get("/api/pets", function(req, res) {
        // let query = {};
        // if (req.query.species) {
        //     query.SpeciesId = req.query.species_id;
        // }
        db.Pets.findAll({
            // where: query,
            // include: [db.Species]
        }).then(function(dbPets) {
            res.json(dbPets);
        });
    });

    app.get("/api/pets/:id", function(req, res) {
        db.Species.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Pets]
        }).then(function(dbPets) {
            res.json(dbPets);
        });
    });

    app.post("/api/pets", function(req, res) {
        const pet = req.body;
        console.log("New Pet:");
        console.log(pet);

        db.Pets.create({
            petName: pet.petName,
            petBreed: pet.petBreed,
            petAge: pet.Age,
            petWeight: pet.petWeight,
            fixed: pet.fixed,
            shots: pet.shots,
            dateComeIn: pet.dateCameIn,
            petQuestion1: pet.petQuestion1,
            petQuestion2: pet.petQuestion2,
            petQuestion3: pet.petQuestion3,
            petQuestion4: pet.petQuestion4
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });
};
