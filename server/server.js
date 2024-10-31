const express = require('express');
var cors = require('cors')
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

//Rotas de livros
app.get('/livros', (req, res)=>{
    const livros = [
            {id: 1, livro: "Alice no Pais das Maravilhas"},
            {id: 2, livro: "Gato de Botas"},
            {id: 3, livro: "Meu malvado favorito"},
            {id: 4, livro: "Meu malvado favorito3"},
    ];
    res.json(livros);
});

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`));


