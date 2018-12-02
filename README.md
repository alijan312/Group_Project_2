# Group_Project_2

Project Proposal:
    We will create a searchable database of pets for adoption. There are such sited existing already, but we have the overall user experience to be lacking. They could use a more appealing homepage, better explainations and, most importantly, a good searching function.

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);
    We will employ MySQL to create a searchable database of animals for adoption.

* Have both GET and POST routes for retrieving and adding new data;
    We will use get get routes for our pet search. We will use post routes when useres register their information to our database.

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;
    Make use of the newer Moment time library to create time stamps on user registrations.

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).
    We will use Eslint

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)
    Will use .env to disguise sensitve API information


DATABASE STRUCTURE:

pets_db
    pet_table
        id INT NOT NULL AUTO_INCREMENT,
        entryDate date DEFAULT GETDATE(),
        petType VARCHAR(100) NOT NULL, (note: dog, cat, bird, horse, rabbit, lizard, etc.)
        petBreed VARCHAR(100) default 'unknown',
        petName VARCHAR(100) NOT NULL,
        petAge INT NOT NULL,
        petWeight INT NOT NULL,
        petQuestion1 TEXT(1000) NOT NULL, (good with other animals?)
        petQuestion2 TEXT(1000) NOT NULL,
        petQuestion3 TEXT(1000) NOT NULL,
        petQuestion4 TEXT(1000) NOT NULL, (etc...)
        PRIMARY KEY ( id )
    user_table
        id INT NOT NULL AUTO_INCREMENT,
        entryDate date DEFAULT GETDATE(),
        userName VARCHAR(200) NOT NULL,
        userEmail VARCHAR(200) NOT NULL,
        userPhone INT NOT NULL,
        userQuestion1 ENUM('yes','no','unsure') (interested in adopting?)
        userQuestion2 TEXT(1000) NOT NULL,
        userQuestion3 TEXT(1000) NOT NULL,
        userQuestion4 TEXT(1000) NOT NULL, (etc...)
        PRIMARY KEY ( id )