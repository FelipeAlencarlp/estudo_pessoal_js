// Onde fica a lógica (é executado)
const pool = require('../../database/connection');

async function listarUsuarios(page = 1, limit = 10, filtros = {}) {
    const offset = (page - 1) * limit

    let query = 'SELECT * FROM usuarios';
    let conditions = [];
    let values = [];

    // filtro por nome
    if (filtros.nome) {
        values.push(`%${filtros.nome}%`);
        conditions.push(`nome ILIKE $${values.length}`);
    }

    // filtro por email
    if (filtros.email) {
        values.push(`%${filtros.email}%`);
        conditions.push(`email ILIKE $${values.length}`);
    }

    // WHERE dinâmico
    if (conditions.length > 0) {
        query += ` WHERE ${conditions.join(' AND ')}`;
    }

    // ordenação + paginação
    query += ` ORDER BY id LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;

    values.push(limit, offset);
    
    const { rows } = await pool.query(query, values);

    let countQuery = `SELECT COUNT(*) FROM usuarios`;

    if (conditions.length > 0) {
        countQuery += ` WHERE ${conditions.join(' AND ')}`; 
    }

    const totalResultado = await pool.query(countQuery,
        values.slice(0, values.length - 2));

    const total = parseInt(totalResultado.rows[0].count);

    return {
        data: rows,
        total
    };
}

async function buscarPorId(id) {
    const { rows } = await pool.query(
        'SELECT * FROM usuarios WHERE id=$1', [id]
    );

    return rows[0];
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
    buscarPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
