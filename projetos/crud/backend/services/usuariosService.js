// Onde fica a lógica (é executado)
let usuarios = [];

function listarUsuarios() {
    return usuarios;
}

function criarUsuario(dados) {
    const usuario = {
        id: Date.now(),
        ...dados
    };

    usuarios.push(usuario);

    return usuario;
}

function atualizarUsuario(id, dados) {
    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) return null;

    usuarios[index] = {
        ...usuarios[index],
        ...dados
    };

    return usuarios[index];
}

function deletarUsuario(id) {
    const index = usuarios.findIndex(u => u.id === id);

    if(index === -1) return false;

    usuarios.splice(index, 1);

    return true;
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
