/*
    Dado:

        const usuarios = [1,2,3,4,5,6,7,8];

        function processarUsuario(id) {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(`Usuário ${id} processado.`);
                    resolve(id);    
                }, 2000);    
            });
        }

    Objetivo:
        Criar uma função:
            async function processarEmLotes()

        Que:    
            1. Pegue 2 usuários por vez
            2. Execute com Promise.all()
            3. Espere terminar
            4. Depois execute os próximos 2

    Resultado:
        Rodada 1:   
            Usuario 1
            Usuario 2
        
        2 segundos depois
        Rodada 2:
            Usuario 3
            Usuario 4

        Depois:
            Usuario 5
            Usuario 6

        Depois:
            Usuário 7
            Usuário 8

    Dica:
        Vai precisar usar algo como:
            slice()
        para pegar pedaços do array.
*/

const usuarios = [1,2,3,4,5,6,7,8];

function processarUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Usuário ${id} processado.`);
            resolve(id);
        }, 2000);
    });
}

async function processarEmLotes() {
    try {
        for (let i = 0; i < usuarios.length; i += 2) {
            const lote = usuarios.slice(i, i + 2);

            await Promise.all(
                lote.map(id => processarUsuario(id))
            );
        }
        
    } catch (error) {
        console.log('Deu erro:', error)
    }
}

processarEmLotes();

/*
    Chamado de Concurrency Control (controle de concorrência)
    Muito utilizado para:
        - APIs
        - scraping
        - filas
        - processamento de dados
        - workers
        - filas de emails
*/