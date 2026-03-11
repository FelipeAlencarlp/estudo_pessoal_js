// Onde fica a lógica (é executado)
const pool = require('../database/connection');

async function listarUsuarios() {
    const { rows } = await pool.query('SELECT * FROM usuarios');

    return rows;
}

async function criarUsuario(dados) {
    const { nome, email, telefone } = dados;

    const { rows } = await pool.query(
        'INSERT INTO usuarios (nome, email, telefone) VALUES ($1,$2,$3) RETURNING *',
        [nome, email, telefone]
    );
    // $1,$2,$3 -> são placeholders, evitam SQL Injection

    return rows[0];
}

async function atualizarUsuario(id, dados) {
    const { nome, email, telefone } = dados;

    const { rows } = await pool.query(
        'UPDATE usuarios SET nome=$1, email=$2, telefone=$3 WHERE id=$4 RETURNING *',
        [nome, email, telefone, id]
    );

    return rows[0];
}

async function deletarUsuario(id) {
    await pool.query('DELETE FROM usuarios WHERE id=$1', [id]);

    return true;
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
