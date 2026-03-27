/*
    Map

    Cenário:
        Tendo que retornar só dois dados necessários pro frontend

    Desafio:
        Crie a função:
            const formartarUsuarios = (usuarios) => {}

        Entrada:
            [
                { nome: 'Felipe', email: 'felipe@email.com', idade: 25 },
                { nome: 'Ana', email: 'ana@email.com', idade: 30 }
            ]

        Saída esperada:
            [
                { nome: 'Felipe', email: 'felipe@email.com' },
                { nome: 'Ana', email: 'ana@email.com' }
            ]
            -> remover idade

        Regras:
            - usar .map()
            - usar arrow function

        Bônus:
            adicionar campo:
                ativo: true
*/

const formartarUsuarios = (usuarios) =>
    usuarios.map(({ nome, email }) => ({ nome, email, ativo: true }));

/*
    Função acima é a forma enxuta de:
        const formatarUsuarios = (usuarios) => {
            return usuarios.map(usuario => {
                let { nome, email } = usuario;
                return { nome, email, ativo: true };
            });
        };
*/


const usuarios = [
    { nome: 'Felipe', email: 'felipe@email.com', idade: 25 },
    { nome: 'Ana', email: 'ana@email.com', idade: 30 }
];

console.log(formartarUsuarios(usuarios));
