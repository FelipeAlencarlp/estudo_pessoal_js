/*
    Cenário:
        Você precisa validar dados de um usuário antes de salvar

    Desafio:
        Crie uma função:
            function validarUsuario(usuario) {}

        Entrada:
            const usuario = {
                nome: 'Felipe',
                email: 'felipe@email.com',
                idade: 17
            };

        Regras:
            1. Nome
                - precisa existir
                - mínimo 3 caracteres

            2. Email
                - precisa conter '@'

            3. Idade
                - deve ser >= 18
        
        Saída esperada:
            se tudo ok:
                {
                    valido: true,
                    mensagem: 'Usuário válido'
                }

            se der erro:
                {
                    valido: false,
                    mensagem: 'Idade mínima é 18 anos'
                }
*/

function validarUsuario(usuario) {
    if (!usuario.nome) {
        return { valido: false, mensagem: 'Nome é obrigatório' };
    }

    if (usuario.nome.length < 3) {
        return { 
            valido: false,
            mensagem: 'O nome deve ter no mínimo 3 caracteres.' 
        };
    }

    if (!usuario.email.includes('@')) {
        return { valido: false, mensagem: 'E-mail inválido.' };
    }

    if (usuario.idade < 18) {
       return { valido: false, mensagem: 'Idade mínima é 18 anos.' };
    }

    return { valido: true, mensagem: 'Usuário válido' };
}

const usuario = {
    nome: 'Felipe',
    email: 'felipe@email.com',
    idade: 18
};

console.log(validarUsuario(usuario));