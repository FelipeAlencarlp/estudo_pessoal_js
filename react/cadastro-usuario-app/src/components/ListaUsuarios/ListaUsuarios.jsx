import Item from "../Item/Item";

import styles from './ListaUsuarios.module.css';

function ListaUsuarios({ usuarios, excluirUsuario, setUsuarioEditando }) {
    return (
        <div className={styles.container}>
                <h3>Usuários Cadastrados</h3>

                {usuarios.length > 0 ? (
                    <>
                        <table className={styles.tabela}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => (
                                    <Item
                                        key={usuario.id}
                                        usuario={usuario}
                                        excluirUsuario={excluirUsuario}
                                        setUsuarioEditando={setUsuarioEditando}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <>
                        <p>Nenhum usuário.</p>
                    </>
                )}
            </div>
    );
}

export default ListaUsuarios;