/*
    Cenário:
        Dado um sistema que precisa:
            - Buscar usuários
            - Buscar pedidos
            - Buscar pagamentos

        Cada busca demora um tempo diferente:
            1. Executar tudo ao mesmo tempo
            2. Esperar todas terminarem
            3. Exibir os resultados organizados
            4. Tratar erro corretamente

    Parte 1:
        Implemente essas 3 funções:
            function busacarUsuarios()
            function buscarPedidos()
            function buscarPagamentos()

        Regras:
            - Cada uma retorna uma Promise
            - Use setTimeout
            - Tempos diferentes (ex: 1s, 2s, 3s)
            - Retorne um array fictício em cada

        Exempl de retorno:
            resolve(['Usuario1', 'Usuario2'])

    Parte 2:
        Crie uma função async chamada iniciar()
            - Usar Promise.all
            - Esperr as 3 funções
            - Mostrar algo assim no console:
                Usuarios: [...]
                Pedidos: [...]
                Pagamentos: [...]

    Parte 3 - Tratamento de erro:
        Faça uma das funções (ex: buscarPagamentos)
        rejeitar propositalmente

        Use try/catch para capturar o erro.

        Mostre no console:
            Erro ao buscar dados: ...

*/

function buscarUsuarios() {
    let usuarios = ['Usuario1', 'Usuario2'];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!usuarios.length) {
                reject('Não há usuários cadastrados');
            } else {
                resolve(usuarios);
            }
        }, 1000);
    });
}

function buscarPedidos() {
    let pedidos = ['Pedido1', 'Pedido2'];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!pedidos.length) {
                reject('Não há pedidos na lista');
            } else {
                resolve(pedidos);
            }
        }, 2000);
    });
}

function buscarPagamentos() {
    let pagamentos = ['Pagamento1', 'Pagamento2', 'Pagamento3'];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!pagamentos.length) {
                reject('Não foi realizado nenhum pagamento ainda.');
            } else {
                resolve(pagamentos);
            }
        }, 3000);

        reject('Erro na busca por pagamentos!');
    });
}

async function iniciar() {
    try {
        const resultados = await Promise.allSettled([
            buscarUsuarios(),
            buscarPedidos(),
            buscarPagamentos()
        ]);
        
        resultados.forEach((resultado) => {
            if (resultado.status === 'fulfilled') {
                console.log('Sucesso:', resultado.value);
            } else {
                console.log('Erro:', resultado.reason);
            }
        });
    } catch (error) {
        console.log('Erro ao buscar dados: ', error);
    }
}

iniciar();


