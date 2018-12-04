//Create agency_table Table Structure
var agency_table = sequelize.define('agency_table', {
    id: Sequelize.STRING,
    agency_name:Sequelize.STRING,
    agency_phone:Sequelize.STRING,
    agency_address:Sequelize.STRING,
    agency_city:Sequelize.STRING,
    agency_state:Sequelize.STRING,
    agency_zip:Sequelize.INTEGER,
    agency_contact:Sequelize.STRING,
    contact_name:Sequelize.STRING,
    contact_email:Sequelize.STRING,
    contact_pswd:Sequelize.STRING,
    agency_question4:Sequelize.STRING //purpose of this rescue?
});
 
//Applying agency_table Table to database
sequelize.sync({force:true}).complete(function (err) {
 if(err){
    console.log('An error occur while creating table');
 }else{
    console.log('Item table created successfully');
 }
});