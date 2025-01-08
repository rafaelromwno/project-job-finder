const { Sequelize } = require('sequelize'); // import the sequelize library

// create a new sequelize instance for database connection

const sequelize = new Sequelize(
  {
    dialect: 'sqlite', // specify sqlite as the database dialect
    storage: '.db/app.db' // specify the location of the sqlite database file
  }
);

// export the sequelize instance to be used in other parts of the application

module.exports = sequelize;
