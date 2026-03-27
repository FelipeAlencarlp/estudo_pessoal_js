function errorMiddleware(err, req, res, next) {
    console.log('Erro:', err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        error: err.message || 'Erro interno do servidor.'
    });
}

module.exports = errorMiddleware;