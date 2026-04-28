/*
    Desafio 1 - Migration
        Missão:
            1. Rodar a primeira migration
                -> criar tabelas no banco

            2. Pensar: -> O que acontece se alterar o schema depois?

            3. Pensar: -> Por que migrations são importantes em equipe?
*/


/*
    Preciso ter um banco criado
    Preciso ter um projeto Node

    Instalar Prisma:
        npm install prisma @types/node --save-dev
        npm install @prisma/client @prisma/adapter-pg dotenv

    Eis o que cada pacote faz:
        prisma- A CLI do Prisma para executar comandos como prisma init,
                prisma migrate, e prisma generate

        @prisma/client- A biblioteca Prisma Client para consultar seu banco de dados

        @prisma/adapter-pg- O node-postgresadaptador de driver
                            que conecta o Prisma Client ao seu banco de dados

        dotenv- Carrega variáveis ​​de ambiente do seu .envarquivo

    Em seguida, configure seu projeto Prisma ORM
    criando seu arquivo de esquema Prisma com o seguinte comando:
        npx prisma init --output ../generated/prisma

        Este comando realiza algumas tarefas:
            - Cria um prisma/diretório com um schema.
               prismaarquivo contendo sua conexão de banco
               de dados e modelos de esquema.
            - Cria um .envarquivo no diretório raiz para variáveis ​​de ambiente.
            - Gera o cliente Prisma no generated/prisma/diretório
            - Cria um prisma.config.tsarquivo para configuração do Prisma.

    Depois dentro de 'schema.prisma' preciso criar as models:
        model User {
            ...
        }

        E rodar o comando:
            npx prisma migrate dev --name init
            -> Este comando cria as tabelas do
               banco de dados com base no seu esquema.
               fica localizado dentro da pasta 'migrations'

    Por último preciso gerar o client:
        npx prisma generate

        Preciso instanciar o client prisma dentro de:
            lib/prisma.ts
*/

/*
    Pensar: -> O que acontece se alterar o schema depois?
    Caso eu queira alterar algum campo no schema,
    por exemplo adicionar endereço do usuário:

        model User {
            id    Int     @id @default(autoincrement())
            name  String
            email String  @unique
            address String
            orders Order[]
        }

        E rodar novamente o prisma migrate para atualizar a migração:
            npx prisma migrate dev --name added_address.
*/

/*
    Pensar: -> Por que migrations são importantes em equipe?
        Automatizam, versionam e sincronizam as alterações
        no esquema do banco de dados, garantindo consistência
        entre os ambientes de desenvolvimento, testes e produção.
        Elas transformam a evolução da base de dados em um processo
        controlado e seguro, evitando conflitos quando vários
        desenvolvedores alteram a estrutura ao mesmo tempo.

        Ambientes Seguros (Dev vs. Prod):
            Permite usar npx prisma migrate dev para
            desenvolvimento (rápido) e npx prisma migrate
            deploy para produção (seguro), garantindo que
            dados existentes não sejam perdidos.

        Migrations também:
            - evitam "funciona na minha máquina"
            - permitem rollback (em caso de erro)
            - documentam evolução do banco
*/