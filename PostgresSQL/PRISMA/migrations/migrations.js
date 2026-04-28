/*
    Conceito - Migration
        Migration = transformar schema em banco real

        Você define no Prisma -> ele cria no PostgreSQL

        Ponto importante sobre alterar Schema:
            Se quero adicionar um campo a uma tabela,
            tenho que ter em mente que essa tabela já possui
            dados cadastrados.
            Ao adicionar um novo campo, por exemplo o campo
            'endereço' na tabela usuários, preciso definir
            como opcional com '?', ex:
                model User {
                    id ...
                    name ...
                    email ...
                    address String?
                }

            Caso depois eu queira tornar obrigatório,
            preciso popular os dados primeiro antes de torna-lo.
*/