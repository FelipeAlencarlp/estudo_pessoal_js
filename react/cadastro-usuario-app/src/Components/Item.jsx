function Item({ usuario, excluirUsuario, setUsuarioEditando }) {
    return (
        <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>
                <button
                    title="Editar usuário"
                    onClick={() => setUsuarioEditando(usuario)}
                >
                    Editar
                </button>

                <button
                    title="Excluir usuário"
                    onClick={() => excluirUsuario(usuario.id)}
                >
                    Excluir
                </button>
            </td>
        </tr>
    );
}

export default Item;