import Item from "./Item";

function ListaUsuarios({ usuarios, excluirUsuario }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 20,
                alignItems: 'center'
            }}>
                <h3>Usuários Cadastrados</h3>

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
                            />
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default ListaUsuarios;