module.exports = function(sequelize, DataTypes) {
    const Species = sequelize.define("Species", {
        type: DataTypes.STRING
    });

    // Species.sync().then(() => {
    //     Species.create({
    //         type: "Dog"
    //     });
    //     Species.create({
    //         type: "Cat"
    //     });
    //     Species.create({
    //         type: "Bird"
    //     });
    // });

    return Species;
};
