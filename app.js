const express           = require('express');
const app               = express();
const expressHandlebars = require('express-handlebars');
const path              = require('path');
const db                = require('./database/connection');
const bodyParser        = require('body-parser');


const PORT = 3000;

app.listen
(
    PORT, 
    function()
    {
        console.log("O express está rodando na porta " + PORT);
    }
)
.on
(
  'error', 
  (err) => 
  {
    if (err.code === 'EADDRINUSE') 
    {
      console.error('Porta 3000 já está em uso. Tente outra porta.');
    } 
    else 
    {
      console.error(err);
    }
  }
);

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

// handle bars

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// static folder

app.use(express.static(path.join(__dirname, 'public')));

// database connection

db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// routes

app.get
(
    '/',
    (require, response) => {
        response.render('index');
    }
);

// jobs routes

app.use('/jobs', require('./routes/jobsRoutes'));