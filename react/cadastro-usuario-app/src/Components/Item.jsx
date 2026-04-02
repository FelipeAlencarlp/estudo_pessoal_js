function Item({ usuario, excluirUsuario }) {
    return (
        <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>
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