/*
    O que é Async/Await?

    -> É uma forma mais limpa de trabalhar com Promises.

    Isso aqui:
        promesa
            .then(res => console.log(res))
            .catch(err => console.log(err));

    Vira isso:
        try {
            const res = await promessa;
            console.log(res);
        } catch (err) {
            console.log(err);
        }
*/

//   Regra número 1:
//      Só é possível usar 'await' dentro de uma função 'async'.

// Exemplo básico:
async function exemplo() {
    return 'Olá';
}

/*
    O que o async faz?
        Quando é colocado 'async' em uma função:
            Ela automaticamente retorna uma Promise.
*/

// Exemplo:
async function teste() {
    return 10;
}

teste().then(res => console.log(res)); // 10
// Mesmo retornando número, vira Promise automaticamente.

/*
    O que await faz?
        await faz o JS esperar a Promise resolver.
        Mas somente dentro de função async.
*/

// -------------------------------------------------------------------

// Criando um Exemplo Real
// sem async/await
function esperar2s() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Passaram 2 segundos');
        }, 2000);
    });
}

// Usando async/await
async function executar() {
    console.log('Inicio');

    const resultado = await esperar2s();

    console.log(resultado);
    console.log('Fim');
}

executar();

/*
    Detalhando o que acontece:

    Passo 1:
        executar() é chamada.
    Como é async, ela automaticamente retorna uma Promise.

    Passo 2:
        console.log('Inicio');

    Passo 3:
        Chega aqui:
            const resultado = await esperar2s();

        O que acontece:
            1. esperar2s() é chamada
            2. Ela retorna uma Promise
            3. O await pausa SOMENTE essa função
            4. O Event Loop continua funcionando normalmente
        -> Se tivesse outro código fora da função, ele continuaria rodando.

    Passo 4:
        Depois de 2 segundos:
            resolve('Passaram 2 segundos');
            A promise é resolvida.
            O await recebe o valor.
            resultado = 'Passaram 2 segundos'
    
    Passo 5:
        Executa:
            console.log(resultado);
            console.log('Fim');

    Ordem final no console:
        Inicio
        (esperar 2 segundos...)
        Passram 2 segundos
        Fim

    Diferença crucial:
        Com .then() ficaria:
            esperar2s().then(res => console.log(res))

        Mas se tivesse várias operações encadeada, ficaria dificil de ler.

        Com async/await:
            Código parece síncrono. Mas continua sendo assincrono por baixo.
*/

// -------------------------------------------------------------------

// E se a Promise for rejeitada?
function esperar2ss() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Deu erro!');
        }, 2000);
    });
}

async function executar2() {
    const resultado = await esperar2ss();
    console.log(resultado);
}

executar2();

/*
    Nesse exemplo, como não existe try/catch para tratar uma exceção,
    quando a Promise for rejeitada:
        reject('Deu erro!')

    O await vai lançar uma exceção.
    E como não tem ninguém tratando essa exceção...
    Vai gerar:
        UnhandledPromiseRejection

    O que realmente acontece por baixo:
        Quando se usa:
            const resultado = await esperar2ss()

        Se a Promise resolve -> o valor vai para resultado
        Se a Promise rejeita -> o await lança um erro,
        como se fosse:
            throw 'Deu erro!'

        Ou seja...:
            await transforma reject() em throw.

        Por isso precisamos usar:
            try {
                const resultado = await esperar2ss();
                console.log(resultado);
            } catch (erro) {
                console.log('Erro capturado: ', erro);
            }
*/

/*
    Agora o ponto importante!

    Async/await funciona assim:
        - resolve() -> continua normalmente
        - reject() -> vira throw
        - try/catch -> captura o erro

    É basicamente:
        .then() -> await
        .catch() -> try/catch
*/

// -------------------------------------------------------------------

// Para pensar
async function executar3() {
    try {
        console.log('Início');
        await esperar2ss();
        console.log('Depois do await');
    } catch (erro) {
        console.log('Entrou no catch');
    }

    console.log('Fim');
}

// Se o Promise for rejeitada, qual será a ordem de execução?
/*
    Resposta:
        1 - Inicio
        2 - await esperar2ss() -> função pause esperando a Promise
        3 - depois de 2 segundos a Promise executa: reject('Deu erro')
        4 - o await transforma isso em: throw 'Deu erro'
        5 - como está dentro de um try, o fluxo pula imediatamente para o catch
        6 - console.log('Depois do await) NÂO EXECUTA
        7 - catch (erro) captura o erro
        8 - executa Entrou no catch
        9 - Fim

    Resultado no console:
        Inicio
        (espera 2 segundos)
        Entrou no catch
        Fim
*/

/*
    ** Ponto importante a ser analisado:
        Mesmo dando erro:
            O código depois do catch continua executando
        
        Isso é muito usado em backend real.
        O erro é tratado, mas não quebra a aplicação inteira.
*/

// -------------------------------------------------------------------

// Uma outra situação
async function executar4() {
    console.log('A');

    await esperar2s();

    console.log('B');
}

console.log('C');

executar4();

console.log('D');

/*
    Resposta:
        1 - Primeiro executa console.log('C') pois a função ainda não foi chamada
        2 - depois a função executar4() é iniciada
        3 - executa console.log('A')
        4 - executa await esperar2s() e espera 2 segundos
        5 - com isso ele continua o fluxo e executa console.log('D');
        6 - executa 'Passaram 2 segundos'
        7 - e por fim executa console.log('B')

    Saida no console:
        C
        A
        D
        (espera 2 segundos)
        B
*/

// -------------------------------------------------------------------

// Outra situação
async function executar5() {
    console.log('A');
    await esperar2s();
    console.log('B');
}

executar5();
executar5();
/*
    Serão duas execuções
    Pergunta:
        Os dois 'B' aparecem juntos depois de 2 segundos
        ou um espera o outro terminar?
*/

/*
    Aqui já entramos em concorrência básia em JavaScript

    O que acontece:
        1 - primeira chamada imprime A
        2 - Agenda um setTimeout para 2 segundos
        3 - Segunda chamada -> imprime A
        4 Agenda outro setTimeout para 2 segundos

    Agora temos duas Promises rodando  ao mesmo tempo.
    Depois de dois segundos:
        - A primeira resolve
        - A segunda resolve praticamente no mesmo momento
    
    Saida console:
        A
        A
        (espera 2 segundos)
        B
        B
*/

/*
    **Conceito importante:
        Chamadas async são independentes.
        Uma não espera a outra, a menos que eu mande esperar.
*/

// -------------------------------------------------------------------

// Outra situação
async function executar6() {
    console.log('A');
    await esperar2s();
    console.log('B');
}

async function iniciar() {
    await executar6();
    await executar6();
}

iniciar();
// Aqui está sendo usado o await nas chamadas.

/*
    Pergunta:
        Os dois B aparecem juntos ou agora um espera o outro terminar?

    Resposta:
        1 - executa console.log('A')
        2 - espera 2 segundos
        3 - executa console.log('B')
        4 - executa console.log('A')
        5 - espera 2 seguundos
        6 - executa console.log('B')

    Saida console:
        A
        espera 2 segundos
        B
        A
        espera 2 segundos
        B

*/

/*
    Foi dominado nesse estudo:
        - Execução concorrente (duas chamadas independentes)
        - Execução sequencial com await
        - Como controlar fluxo assíncrono
        - Como o Event Loop não trava o programa

    Isso já é base forte para:
        - Requisições HTTP
        - Banco de dados
        - APIs
        - Node.js backend real
*/