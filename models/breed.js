module.exports = function(sequelize, DataTypes) {
    const Breed = sequelize.define("Breed", {
        type: DataTypes.STRING
    });
    return Breed;
};
