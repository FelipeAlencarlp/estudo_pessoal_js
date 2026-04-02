import styles from './Item.module.css';

function Item({ usuario, excluirUsuario, setUsuarioEditando }) {
    return (
        <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>
                <button
                    title="Editar usuário"
                    className={styles.botaoEditar}
                    onClick={() => setUsuarioEditando(usuario)}
                >
                    Editar
                </button>

                <button
                    title="Excluir usuário"
                    className={styles.botaoExcluir}
                    onClick={() => excluirUsuario(usuario.id)}
                >
                    Excluir
                </button>
            </td>
        </tr>
    );
}

export default Item;