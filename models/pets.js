module.exports = function(sequelize, DataTypes) {
    //Create pets_table Table Structure
    const Pets = sequelize.define("Pets", {
        petName: DataTypes.STRING,
        petBreed: DataTypes.STRING,
        petAge: DataTypes.INTEGER,
        petWeight: DataTypes.INTEGER,
        //pet temperment?
        fixed: DataTypes.BOOLEAN,
        shots: DataTypes.BOOLEAN,
        dateCameIn: DataTypes.DATE,
        petQuestion1: DataTypes.STRING,
        //pet good with other animals?
        petQuestion2: DataTypes.STRING,
        //pet good with children?
        petQuestion3: DataTypes.STRING,
        //other details about pet?
        petQuestion4: DataTypes.STRING
    });

    // Pets.associate = function(models) {
    //     Pets.belongsTo(models.AgencyTable, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });

    //     Pets.belongsTo(models.Species, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Pets;
};
