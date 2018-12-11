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
                    petName: "Charlie",
                    petSex: "Male",
                    petBreed: "Bulldog",
                    petAge: 2,
                    petWeight: 15,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2017-12-07",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Fluffy",
                    petSex: "Female",
                    petBreed: "Poodle",
                    petAge: 3,
                    petWeight: 20,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2016-11-06",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Lucky",
                    petSex: "Male",
                    petBreed: "Husky",
                    petAge: 1,
                    petWeight: 10,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2018-10-07",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Cutesy",
                    petSex: "Female",
                    petBreed: "Beagle",
                    petAge: 2,
                    petWeight: 20,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2016-11-08",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Jackie",
                    petSex: "Female",
                    petBreed: "Apso",
                    petAge: 4,
                    petWeight: 25,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2018-05-12",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Joanne",
                    petSex: "Female",
                    petBreed: "Pug",
                    petAge: 1,
                    petWeight: 13,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2018-07-25",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Magdalene",
                    petSex: "Female",
                    petBreed: "Shih Tzu",
                    petAge: 2,
                    petWeight: 25,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2017-03-07",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    petName: "Doggy",
                    petSex: "Male",
                    petBreed: "Shepherd",
                    petAge: 3,
                    petWeight: 30,
                    fixed: true,
                    shots: true,
                    dateCameIn: "2016-01-07",
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
