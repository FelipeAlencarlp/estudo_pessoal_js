let usuariosDB = [];

export const getUsuarios = async () => {
    return [...usuariosDB];
};

export const criarUsuario = async (novo) => {
    usuariosDB.push(novo);
    return novo;
};

export const atualizarUsuario = async (usuario) => {
    usuariosDB = usuariosDB.map((u) =>
        u.id === usuario.id ? usuario : u
    );
    return usuario;
};

export const deletarUsuario = async (id) => {
    usuariosDB = usuariosDB.filter((u) => u.id !== id);
    return id;
};