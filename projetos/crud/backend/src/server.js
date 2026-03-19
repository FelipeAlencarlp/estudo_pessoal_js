require('dotenv').config();

const errorMiddleware = require('./middlewares/errorMiddleware');

const express = require('express');
const usuariosRoutes = require('./modules/usuarios/usuarios.routes');
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

app.use(errorMiddleware);