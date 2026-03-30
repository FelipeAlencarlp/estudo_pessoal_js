function ListaUsuarios() {
    const usuarios = [
        { id: 1, nome: 'Felipe', idade: 25 },
        { id: 2, nome: 'João', idade: 30 },
        { id: 3, nome: 'Maria', idade: 22 },
    ];

    return (
        <div>
            <h2>Usuários</h2>

            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>
                        {user.nome} - {user.idade} anos
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;