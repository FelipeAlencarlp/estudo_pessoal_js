const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool;

/*
    Pool:
        Gerencia conexões com banco.
        Em vez de abrir conexão a cada query, ele reutiliza conexões.
        Melhora a performance.
*/