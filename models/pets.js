module.exports = function(sequelize, DataTypes) {
    //Create pets_table Table Structure
    const Pets = sequelize.define("Pets", {
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
        fixed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        shots: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        dateCameIn: {
            type: DataTypes.DATE,
            allowNull: false
        },
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
