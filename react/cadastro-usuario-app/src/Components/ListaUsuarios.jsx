import Item from "./Item";

function ListaUsuarios({ usuarios, excluirUsuario, setUsuarioEditando }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
                alignItems: 'center'
            }}>
                <h3>Usuários Cadastrados</h3>
                {usuarios.length > 0 ? (
                    <>
                        <table style={{ width: 800, alignItems: 'center' }}>
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