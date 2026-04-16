const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(express.json()); // Middleware para ler JSON no body

// Middleware criado manualmente
const methodUrl = (req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
};

// usando o middleware
app.use(methodUrl);
app.use('/', usuariosRoutes);

app.listen(3000, () => console.log(`Servidor rodando na porta 3000`));