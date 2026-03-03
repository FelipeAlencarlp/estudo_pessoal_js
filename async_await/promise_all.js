/*
    Promise.all(), o que ela faz?
        Ela recebe um array de Promises e espera TODAS resolverem.

        Se todas resolverem -> retorna um array com os resultados.
        Se UMA falhar -> ela falha inteira.
*/

// Exemplo simples:
function esperar1s() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('1s'), 1000);
    });
}

function esperar2s() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('2s'), 2000);
    });
}

function esperar3s() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('3s'), 3000);
    });
}

// Agora usando o Promise.all():
async function executar() {
    const resultados = await Promise.all([
        esperar1s(),
        esperar2s(),
        esperar3s()
    ]);
    console.log(resultados);
}

// executar();

/*
    Nesse caso vai ser executado em 3 segundos.
    Pois as Promises começam juntas.
    Quando fazemos:
        Promise.all([
            esperar1s(),
            esperar2s(),
            esperar3s()
        ]);

    O que acontece é:
        - esperar1s inicia
        - esperar2s inicia
        - esperar3s inicia
    Tudo ao mesmo tempo.
    Então o tempo total será o da mais lenta.
    No caso: 3 segundos.

    **Detalhe importante:
        A ordem do array respeita a ordem das Promises,
        não a ordem de quem terminou primeiro.
        Mesmo que a de 1s temine antes, o resultado sempre será:
            [ '1s', '2s', '3s' ]
*/

/*
    Detalhe que pega muita gente:
        E se uma falhar?
*/

// Exemplo
function erro2s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Erro em 2s'), 2000);
    });
}

async function executar2() {
    const resultados = await Promise.all([
        esperar1s(),
        erro2s(),
        esperar3s()
    ]);
    console.log(resultados);
}
// executar2();
/*
    Pergunta:
        O que acontece?
            - Ele espera todas teminarem?
            - Ele falha imediatamente?
            - Ele retorna parcialmente?

    Resposta:
        - Ele falha assim que a primeira Promise rejeita.
        - Ele não espera as outras terminarem para retornar erro.
        Assim que a de 2s dá reject, o Promise.all já rejeita.
        Ele "explode" ali.
*/

// Resutlado usando try/catch
async function executar3() {
    try {
        const resultados = await Promise.all([
            esperar1s(),
            erro2s(),
            esperar3s()
        ]);
        console.log(resultados);
    } catch (erro) {
        console.log('Erro capturado: ', erro)
    }
}
// executar3();

/*
    Conceito profissional importante:
        Promise.all é fail-fast
        Uma falhou -> tudo falha

    Isso é ótimo quando:
        - Preciso que todas funcionem
        - Se uma falhar, o processo inteiro deve parar
*/

// ---------------------------------------------------------------

/*
    Quando quero:
        - Executar todas as Promises
        - Mesmo que algumas falhem
        - E saber exatamente quais deram certo e quais deram erro

    Uso:
        Promise.allSettled()

    Diferença:
        --------------------------------------------------------
        MÉTODO                  SE UMA FALHAR      ESPERA TODAS?
        --------------------------------------------------------
        Promise.all             Falha tudo         Não
        Promise.allSettled      Continua           Sim
        --------------------------------------------------------
*/

// Exemplo prático
const resultados = await Promise.allSettled([
    esperar1s(),
    erro2s(),
    esperar3s()
]);

// console.log(resultados);

/*
    Retorna:
        [
            { status: 'fulfilled', value: '1s' },
            { status: 'rejected', reason: 'Erro em 2s' },
            { status: 'fulfilled', value: '3s' }
        ]

    O que acontece aqui é:
        Ele não explode.
        Ele espera todas terminarem.
        E depois entrega um relatório completo.
*/

/*
    Quando usar cada um?

    Use Promise.all quando:
        - Preciso que tudo funcione
        - Se uma falhar, não faz sentido continuar

    Use Promise.allSettled quando:
        - Quero tentar tudo
        - Quero saber o que deu certo e errado
        - Tipo envio de emais em lote
        - Processamento de múltiplos usuários
*/

// ---------------------------------------------------------------

// Testando o entendimento
const promises = await Promise.allSettled([
    Promise.resolve(10),
    Promise.reject('Erro'),
    Promise.resolve(30)
]);
console.log(promises);

/*
    Resultado:
        [
            { status: 'fulfilled', value: 10 },
            { status: 'rejected', reason: 'Erro' },
            { status: 'fulfilled', value: 30 }
        ]
*/