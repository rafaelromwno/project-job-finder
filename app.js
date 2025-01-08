const express           = require('express'); // import express module
const app               = express(); // create an express application instance
const expressHandlebars = require('express-handlebars'); // import handlebars templating engine
const path              = require('path'); // import path module for working with file and directory paths
const db                = require('./database/connection'); // import database connection configuration
const bodyParser        = require('body-parser'); // import body-parser for parsing incoming request bodies
const Job               = require('./models/Job'); // import job model
const Sequelize         = require('sequelize'); // import sequelize library
const op                = Sequelize.Op; // extract sequelize operators for query conditions

const PORT = 3000; // define the port number for the application

app.listen
(
    PORT, 
    function()
    {
        console.log("o express está rodando na porta " + PORT); // log when the server is running
    }
)
.on
(
  'error', 
  (err) => 
  {
    if (err.code === 'EADDRINUSE') 
    {
      console.error('porta 3000 já está em uso. tente outra porta.'); // handle port already in use error
    } 
    else 
    {
      console.error(err); // log other errors
    }
  }
);

// body parser middleware

app.use(bodyParser.urlencoded({ extended: false })); // parse url-encoded form data

// handlebars configuration

app.set('views', path.join(__dirname, 'views')); // set the directory for views
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' })); // configure handlebars with a default layout
app.set('view engine', 'handlebars'); // set handlebars as the template engine

// static folder middleware

app.use(express.static(path.join(__dirname, 'public'))); // set the public folder for static files

// database connection

db.authenticate()
  .then(() => {
    console.log('conexão com o banco de dados foi bem-sucedida!'); // log successful database connection
  })
  .catch(err => {
    console.error('erro ao conectar ao banco de dados:', err); // log database connection error
  });

// root route

app.get
(
    '/',
    (require, response) => 
    {
      let search = require.query.job; // get the job search query from the url
      let query = '%'+search+'%'; // create a wildcard search pattern

      if(!search)
      {
          Job.findAll
        (
          { 
            order: 
            [
              ['createdAt', 'DESC'] // order jobs by creation date in descending order
            ]
          }
        )
        .then
        (
          jobs => 
          {
            response.render('index', { jobs }); // render the index page with all jobs
          }
        )
        .catch
        (
          error => console.log(error) // log errors during the query
        )
      }
      else
      {
        Job.findAll
        (
          { 
            where: 
            {
              title: { [op.like]: query } // filter jobs by title using a like query
            },
            order: 
            [
              ['createdAt', 'DESC'] // order filtered jobs by creation date in descending order
            ]
          }
        )
        .then
        (
          jobs => 
          {
            response.render('index', { jobs, search }); // render the index page with filtered jobs and the search term
          }
        )
        .catch
        (
          error => console.log(error) // log errors during the query
        )
      }
    }
);

// jobs routes

app.use('/jobs', require('./routes/jobsRoutes')); // use jobs routes module for handling '/jobs' paths
