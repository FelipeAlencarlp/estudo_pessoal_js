/*
    Cenário (simulação de sistema real)

        Imagine que está sendo construido um dashboard de e-commerce.
        Para montar a tela é preciso buscar:
            Usuários
            Pedidos
            Produtos
            Pagamentos

        Cada um vem de uma API diferente.

    Simulação das APIs
        function buscarUsuarios() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Felipe', 'Ana', 'Carlos']);
                }, 1000);
            });
        }

        function buscarPedidos() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Pedido1', 'Pedido2']);
                });
            });
        }

        function buscarProdutos() {
            return new Promise((resolve) => {
                setTimeout(() {
                    resolve(['Notebook', 'Mouse', 'Teclado']);    
                });
            });
        }

        function buscarPagamentos() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('Erro ao buscar pagamentos.');    
                });
            });
        }

    Desafio 1:
        Crie uma função:
            async function carregarDashboard() {}

        Ela deve:
            1. Buscar todos os dados ao mesmo tempo
            2. Usar Promise.allSettled
            3. Mostrar no console o resultado de cada chamada

        Exemplo esperado no console:
            Usuários: [...]
            Pedidos: [...]
            Produtos: [...]
            Pagamentos: Erro ao buscar pagamentos

        Regras importantes:
            Não pode fazer assim:
                await buscarUsuarios()
                await buscarPedidos()

            Porque isso roda em sequência.

        Queremos concorrência real, então precisa usar:
            Promise.allSettled()

        Dica de estrutura:
            Algo mais ou menos assim:
                const resultados = await Promise.allSettled([
                    buscarUsuarios()
                    buscarPedidos()
                    buscarProdutos()
                    buscarPagamentos()
                ])
            - depois percorre os resultados.

    Desafio 2:
        Depois de resolver o primeiro:
            Monte um objeto final:
                {
                    usuarios: [...],
                    pedidos: [...],
                    produtos: [...],
                    pagamentos: null
                }
            
            Se der erro em algum:
                null
*/

// Simulação de APIs
function buscarUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Felipe', 'Ana', 'Carlos']);
        }, 1000);
    });
}

function buscarPedidos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Pedido1', 'Pedido2']);
        }, 1500);
    });
}

function buscarProdutos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Notebook', 'Mouse', 'Teclado']);
        }, 800);
    });
}

function buscarPagamentos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Erro ao buscar pagamentos.');
        }, 1200);
    });
}

async function carregarDashboard() {
    try {
        const resultados = await Promise.allSettled([
            buscarUsuarios(),
            buscarPedidos(),
            buscarProdutos(),
            buscarPagamentos()
        ]);

        const dashboard = {
            usuarios: [],
            pedidos: [],
            produtos: [],
            pagamentos: []
        };

        const chaves = ['usuarios', 'pedidos', 'produtos', 'pagamentos'];

        resultados.forEach((resultado, index) => {
            const chave = chaves[index];

            if (resultado.status === 'fulfilled') {
                // acesso dinâmico a propriedades de objeto
                dashboard[chave] = resultado.value;
            } else {
                console.log(`Erro em ${chave}:`, resultado.reason);
                dashboard[chave] = null;
            }
        });

        console.log('Dashboard final:', dashboard);
        
    } catch (error) {
        console.log('Erro inesperado:', error);
    }
}

carregarDashboard();