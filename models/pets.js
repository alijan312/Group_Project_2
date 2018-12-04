module.exports = function(sequelize, DataTypes) {
//Create pets_table Table Structure
        var Pets = sequelize.define('Pets', {
            agency_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_breed: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_name:  {
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_age: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            pet_weight: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            pet_question1:  {  //pet temperment?
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_question2:  {  //pet good with other animals?
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_question3: {  //pet good with children?
                type: DataTypes.STRING,
                allowNull: false
            },
            pet_question4:  {  //other details about pet?
                type: DataTypes.STRING,
                allowNull: false
            }
        });
 

        Pets.associate = function(models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            Post.belongsTo(models.Agency, {
            foreignKey: {
                allowNull: false
            }
            });
        };
        
    return Pets;
};