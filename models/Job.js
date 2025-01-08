const Sequelize = require('sequelize'); // import sequelize library
const database = require('../database/connection'); // import the database connection configuration

// define the job model in the database

const Job = database.define
(
    'job', // name of the table in the database
    {
        // define the columns and their data types

        title: 
        {
            type: Sequelize.STRING, // string type for job title
        },
        description: 
        {
            type: Sequelize.STRING, // string type for job description
        },
        salary: 
        {
            type: Sequelize.STRING, // string type for salary details
        },
        company: 
        {
            type: Sequelize.STRING, // string type for company name
        },
        email: 
        {
            type: Sequelize.STRING, // string type for contact email
        },
        new_job: 
        {
            type: Sequelize.INTEGER, // integer type for indicating if it’s a new job (e.g., 1 for true, 0 for false)
        }
    }
)

// export the job model to be used in other parts of the application

module.exports = Job;
