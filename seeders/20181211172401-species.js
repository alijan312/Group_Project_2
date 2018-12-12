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
            "Species",
            [
                {
                    type: "dog",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    type: "cat",
                    createdAt: Sequelize.literal("NOW()"),
                    updatedAt: Sequelize.literal("NOW()")
                },
                {
                    type: "other",
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
        return queryInterface.bulkDelete("Species", null, {});
    }
};
