const db = require("../models");

module.exports = function(app) {
    app.get("/api/pets", function(req, res) {
        db.Pets.findAll({
            include: [db.Agency, db.Species]
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
            petSex: pet.petSex,
            petBreed: pet.petBreed,
            petAge: pet.Age,
            petWeight: pet.petWeight,
            fixed: pet.fixed,
            shots: pet.shots,
            dateComeIn: pet.dateCameIn,
            petQuestion1: pet.petQuestion1,
            petQuestion2: pet.petQuestion2,
            petQuestion3: pet.petQuestion3,
            petQuestion4: pet.petQuestion4,
            image: pet.image,
            AgencyId: pet.AgencyId,
            SpeciesId: pet.SpeciesId
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });

    app.put("/api/pets", function(req, res) {
        const pet = req.body;
        console.log("Update Pet:");
        console.log(pet);

        db.Agency.update({
            petName: pet.petName,
            petSex: pet.petSex,
            petBreed: pet.petBreed,
            petAge: pet.Age,
            petWeight: pet.petWeight,
            fixed: pet.fixed,
            shots: pet.shots,
            dateComeIn: pet.dateCameIn,
            petQuestion1: pet.petQuestion1,
            petQuestion2: pet.petQuestion2,
            petQuestion3: pet.petQuestion3,
            petQuestion4: pet.petQuestion4,
            image: pet.image,
            AgencyId: pet.AgencyId,
            SpeciesId: pet.SpeciesId
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });

    app.delete("/api/pets/:id", function(req, res) {
        db.Pets.destroy({
            where: {
                id: req.params.id
            }
        }).then.json(function(dbPet) {
            res.json(dbPet);
        });
    });

    app.post("/api/species", function(req, res) {
        const species = req.body;
        console.log("New species:");
        console.log(species);

        db.Species.create({
            type: species.type
        }).then(function(dbSpecies) {
            res.json(dbSpecies);
        });
    });

    app.delete("/api/species/:id", function(req, res) {
        db.Species.destroy({
            where: {
                id: req.params.id
            }
        }).then.json(function(dbSpecies) {
            res.json(dbSpecies);
        });
    });
};
