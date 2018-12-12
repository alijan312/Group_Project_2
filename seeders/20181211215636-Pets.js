"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert(
            "Pets",
            [
                {
                    petName: "Sally",
                    petSex: "Female",
                    petBreed: "German Shepherd",
                    petAge: 2,
                    petWeight: "large",
                    fixed: true,
                    shots: true,
                    dateCameIn: 10/22/2018,
                    image: "\Pictures\GermanShepherd.jpg",
                    AgencyId: 1,
                    SpeciesId: 1,
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Doug",
                    petSex: "Male",
                    petBreed: "Pug",
                    petAge: 4,
                    petWeight: "small",
                    fixed: true,
                    shots: true,
                    dateCameIn: 9/22/2018,
                    image: "\Pictures\Pug.jpg",
                    AgencyId: 1,
                    SpeciesId: 1,
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Sara",
                    petSex: "Female",
                    petBreed: "Cat",
                    petAge: 3,
                    petWeight: "small",
                    fixed: true,
                    shots: true,
                    dateCameIn: 11/1/2018,
                    image: "\Pictures\Cat1.jpg",
                    AgencyId: 2,
                    SpeciesId: 2,
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Zack",
                    petSex: "Male",
                    petBreed: "Pit Bull",
                    petAge: 1,
                    petWeight: "medium",
                    fixed: true,
                    shots: true,
                    dateCameIn: 12/10/2018,
                    image: "\Pictures\pitbull-1.jpg",
                    AgencyId: 2,
                    SpeciesId: 2,
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        return queryInterface.bulkDelete("Pets", null, {});
    }
};