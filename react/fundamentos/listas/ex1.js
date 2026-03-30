function Lista() {
    const nomes = ['Felipe', 'João', 'Ana'];

    return (
        <ul>
            {nomes.map((nome) => (
                <li>{nome}</li>
            ))}
        </ul>
    );
}

/*
    O que está acontecendo?
        nomes.map((nome) => ...)

        - percorre o array
        - retorna algo para cada item

        -> Aqui retorna JSX

    ERRO IMPORTANTE
        Isso vai dar aviso:
            <li>{nome}</li>
            -> Falta a Key

    Forma correta
        {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
        ))}

    O que é a key?
        -> identificador único para cada item
        -> ajuda o React a saber:
            - o que mudou
            - o que atualizar

    REGRA IMPORTANTE
        -> Evite usar 'index' se tiver ID real

        Melhor:
            const usuarios = [
                { id: 1, nome: 'Felipe' },
                { id: 2, nome: 'João' }
            ];

            {usuarios.map((user) => (
                <li key={user.id}>{user.nome}</li>    
            ))}
*/