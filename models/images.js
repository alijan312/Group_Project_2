module.exports = function(sequelize, DataTypes) {
    const Images = sequelize.define("Images", {
        path: DataTypes.STRING
    });
    return Images;
};
