module.exports = function(sequelize, DataTypes) {
    const PetsBreed = sequelize.define("PetsBreed", {
        percent: DataTypes.INTEGER
    });
    return PetsBreed;
};
