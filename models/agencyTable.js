//Create agency_table Table Structure
module.exports = function(sequelize, DataTypes) {
    const agencyTable = sequelize.define("agencyTable", {
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

    // //Applying agency_table Table to database
    // sequelize.sync({ force: true }).complete(function(err) {
    //     if (err) {
    //         console.log("An error occur while creating table");
    //     } else {
    //         console.log("Item table created successfully");
    //     }
    // });
    return agencyTable;
};
