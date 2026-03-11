require('dotenv').config();

const express = require('express');
const usuariosRoutes = require('./routes/usuariosRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/usuarios', usuariosRoutes);
// toda requisição que começar com /usuarios
// vai ser tratada pelo arquivo usuariosRoutes

app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta 3000');
});