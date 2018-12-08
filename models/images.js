module.exports = function(sequelize, DataTypes) {
    const Images = sequelize.define("Images", {
        path: DataTypes.STRING
    });

    // Images.associate = function(models) {
    //     Images.hasMany(models.Pets, {
    //         onDelete: "cascade"
    //     });
    // };
    return Images;
};
