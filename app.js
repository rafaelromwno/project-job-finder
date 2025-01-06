const express = require('express');
const app = express();
const db = require('./database/connection');

const PORT = 3000;

app.listen
(
    PORT, 
    function()
    {
        console.log("O express está rodando na porta " + PORT);
    }
)

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
        response.send("Está funcionando")
    }
)