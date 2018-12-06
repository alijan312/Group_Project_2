module.exports = function(sequelize, DataTypes) {
    //Create pets_table Table Structure
    const Pets = sequelize.define("Pets", {
        agencyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petBreed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        petAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        petWeight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //pet temperment?
        petQuestion1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //pet good with other animals?
        petQuestion2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //pet good with children?
        petQuestion3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //other details about pet?
        petQuestion4: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Pets.associate = function(models) {
        Pets.belongsTo(models.agencyTable, {
            foreignKey: "FK_agencyName",
            targetKey: "agencyName"
        });
    };

    return Pets;
};
