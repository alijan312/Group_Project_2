module.exports = function(sequelize, DataTypes) {
    const Species = sequelize.define("Species", {
        type: DataTypes.STRING
    });
    return Species;
};
