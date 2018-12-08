//Create agency_table Table Structure
module.exports = function(sequelize, DataTypes) {
    const Agency = sequelize.define("Agency", {
        agencyName: DataTypes.STRING,
        agencyPhone: DataTypes.STRING,
        agencyAddress: DataTypes.STRING,
        agencyCity: DataTypes.STRING,
        agencyState: DataTypes.STRING,
        agencyZip: DataTypes.INTEGER,
        agencyContact: DataTypes.STRING,
        contactName: DataTypes.STRING,
        contactEmail: DataTypes.STRING,
        contactPswd: DataTypes.STRING,
        agencyQuestion4: DataTypes.STRING //purpose of this rescue?
    });
    return Agency;
};
