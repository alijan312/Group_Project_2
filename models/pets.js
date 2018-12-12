module.exports = function(sequelize, DataTypes) {
    //Create pets_table Table Structure
    const Pets = sequelize.define("Pets", {
        petName: DataTypes.STRING,
        petSex: DataTypes.STRING,
        petBreed: DataTypes.STRING,
        petAge: DataTypes.INTEGER,
        petWeight: DataTypes.STRING,
        fixed: DataTypes.BOOLEAN,
        shots: DataTypes.BOOLEAN,
        dateCameIn: DataTypes.DATE,
        image: DataTypes.BLOB,
        petQuestion1: DataTypes.STRING,
        petQuestion2: DataTypes.STRING,
        petQuestion3: DataTypes.STRING,
        petQuestion4: DataTypes.STRING
    });

    Pets.associate = function(models) {
        Pets.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
        });

        Pets.belongsTo(models.Species, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Pets;
};
