/*
    Controle de Concorrência

    Paralelo total:
        await Promise.all([...]);
    - tudo executa ao mesmo tempo.

    Sequencial:
        await tarefa1();
        await tarefa2();
        await tarefa3();
    - executa uma de cada vez.

    Um conceito muito comum utilizado no mundo real:
        - executar algumas tarefas por vez, não todas.

    Exemplo:
        - Processar 1000 usuários
        - Mas rodas apenas 5 requisições ao mesmo tempo
        - Para não sobrecarregar API ou banco

    Isso é chamado de:
        Limitar concorrência.
*/

// Exemplo simples
function processarUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Usuario ${id} processado`);
            resolve(id);
        }, 2000);
    });
}

//Imagine:
const usuarios = [1,2,3,4,5];

//Se fizermos:
await Promise.all(usuarios.map(id => processarUsuario(id)));

/*
    Resultado no console:
        Usuario 1 processado
        Usuario 2 processado
        Usuario 3 processado
        Usuario 4 processado
        Usuario 5 processado
*/

/*
    A pergunta é:
        Se for necessário executar a leitura de 1000 usuários,
        qual será o resultado?

    1. Sobrecarga de API:
        - Se cada tarefa faz uma requisição HTTP, pode:
            . Bater rate limit
            . receber 429 Too Many Requests

    2. Sobrecarga de banco de dados
        - 1000 queries simultâneas podem:
            . saturar conexões
            . deixar consultas lentas
            . derrubar banco

    3. Consumo de memória
        - Cada Promise consome recursos.
            . 1000 Promisese pendentes podem aumentar bastante
              o uso de memória.

    4 Bloqueio de recursos externos
        - Se estiver processando arquivos, filas ou emails,
          você pode travar serviços externos.
*/

/*
    Solução profissional
        - Controlar quantas tarefas rodam ao mesmo tempo.

    Exemplo ideal:
        . Processar 1000 usuários
        . Mas rodar apenas 5 ou 10 simultaneamente
    
    Fluxo:
        5 executando
        terminou 1 -> entra outro
        terminou 1 -> entra outro

    Isso mantém o sistema estável.
*/