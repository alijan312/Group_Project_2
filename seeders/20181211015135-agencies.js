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
            "Agencies",
            [
                {
                    agencyName: "Houston",
                    agencyPhone: 8127896478,
                    agencyAddress: "1 Main street",
                    agencyCity: "Houston",
                    agencyState: "TX",
                    agencyZip: 77031,
                    contactEmail: "houston@houston.com",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    agencyName: "Austin",
                    agencyPhone: 8127898374,
                    agencyAddress: "1 Post Oak street",
                    agencyCity: "Austin",
                    agencyState: "TX",
                    agencyZip: 77645,
                    contactEmail: "austin@austin.com",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    agencyName: "Dallas",
                    agencyPhone: 8127891425,
                    agencyAddress: "1 Jefferson street",
                    agencyCity: "Dallas",
                    agencyState: "TX",
                    agencyZip: 78354,
                    contactEmail: "dallas@dallas.com",
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
        return queryInterface.bulkDelete("Agencies", null, {});
    }
};
