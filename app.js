const express = require('express');
const app = express();

const PORT = 3000;

app.listen
(
    PORT, 
    function()
    {
        console.log("O express está rodando na porta " + PORT);
    }
)

app.get
(
    '/',
    (require, response) => {
        response.send("Está funcionando 2")
    }
)