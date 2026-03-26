/*
    Desafio Arrays + Loops

    Cenário:
        Tendo uma lista de usuários, filtre manualmente

    Função:
        function filtrarUsuarios(usuarios) {}

    Entrada:
        [
            { nome: 'Felipe', idade: 25 },
            { nome: 'Ana', idade: 17 },
            { nome: 'Carlos', idade: 30 }
        ]

    Regra:
        Retornar apenas usuários com idade >= 18

        -> Não usar filter
        -> usar for ou while
*/

function filtrarUsuarios(usuarios) {
    let maioresDeIdade = [];

    for (let usuario of usuarios) {
        if (usuario.idade >= 18) {
            maioresDeIdade.push(usuario);
        }
    }

    return maioresDeIdade;
}

const usuarios = [
    { nome: 'Fe', idade: 25 },
    { nome: 'Ana', idade: 18 },
    { nome: 'Carlos', idade: 30 }
];

// console.log(filtrarUsuarios(usuarios));

/*
    Desafio para melhorar função anterior

    Desafio:
        Refatore a função para usar:
            .filter()

    Regras:
        -> não usar for
        -> usar arrow function

    Desafio bônus:
        Retornar quem:
            - idade >= 18
            - nome com mais de 3 caracteres
*/

const filtrarUsuarios2 = (usuarios) =>
    usuarios.filter(usuario =>
        usuario.idade >= 18 && usuario.nome.length > 3
    );

console.log(filtrarUsuarios2(usuarios));