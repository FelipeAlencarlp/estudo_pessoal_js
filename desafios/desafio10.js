/*
    Async/Await - Conexão com backend

    Cenário:
        Buscar usuários de uma API (simulado)

        Crie a função:
            const buscarUsuarios = async () => {}

        Simulação da API:   
            function fakeApi() {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve([
                            { nome: "Felipe", idade: 25 },
                            { nome: "Ana", idade: 17 },
                            { nome: "Carlos", idade: 30 }
                        ]);
                    }, 1000);
                });
            }

        Regras:
            Dentro da função:
                - buscar os dados usando await
                - filtrar usuários >= 18
                - retornar resultado

        Saida:
            [
                { nome: "Felipe", idade: 25 },
                { nome: "Carlos", idade: 30 }
            ]

        Regras:
            - usar async/await
            - não usar .then()

        Bônus:
            - usar try/catch
            - tratar erro
*/

function fakeApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { nome: "Felipe", idade: 25 },
                { nome: "Ana", idade: 17 },
                { nome: "Carlos", idade: 30 }
            ]);
        }, 1000);
    });
}

const buscarUsuarios = async () => {
    const resultado = await fakeApi();
    return resultado.filter(user => user.idade >= 18);
}