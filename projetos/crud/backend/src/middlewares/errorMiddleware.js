function errorMiddleware(err, req, res, next) {
    console.log('Erro:', err);

    res.status(500).json({
        erro: 'Erro interno do servidor.'
    });
}

module.exports = errorMiddleware;