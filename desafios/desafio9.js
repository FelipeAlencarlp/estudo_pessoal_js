/*
    Reduce

    Desafio:
        Crie uma função:
            const somarIdades = (usuarios) => {}

        Entrada:
            [
                { nome: 'Felipe', idade: 25 },
                { nome: 'Ana', idade: 30 },
                { nome: 'Carlos', idade: 20 },
            ]

        Saída:
            75

        Regras:
            - usar .reduce()
            - não usar loop

        Bônus:
            Retornar:
                {
                    total: 75,
                    media: 25
                }
*/

const somarIdades = (usuarios) => {
    const total = usuarios.reduce((acc, usuario) => acc + usuario.idade, 0);
    const media = usuarios.length > 0 ? total / usuarios.length : 0;
    return { total, media };
}

const usuarios = [
    { nome: 'Felipe', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Carlos', idade: 20 },
];

console.log(somarIdades(usuarios));