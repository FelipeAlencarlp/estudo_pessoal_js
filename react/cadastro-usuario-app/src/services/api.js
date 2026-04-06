let usuariosDB = [
    { id: 1, nome: 'Felipe', email: 'felipe@email.com', telefone: '51989129855' },
    { id: 2, nome: 'Ana', email: 'ana@email.com' }
];

export async function getUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...usuariosDB]);
        }, 1000);
    });
}

export async function criarUsuario(novoUsuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            usuariosDB.push(novoUsuario);
            resolve(novoUsuario);
        }, 500);
    });
}

export async function atualizarUsuario(usuarioAtualizado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            usuariosDB = usuariosDB.map((u) =>
                u.id === usuarioAtualizado.id ? usuarioAtualizado : u
            );

            resolve(usuarioAtualizado);
        }, 500);
    });
}

export async function deletarUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            usuariosDB = usuariosDB.filter((u) => u.id !== id);
            resolve(id);
        }, 500);
    });
}