/*
    Modelagem
        A definição do modelo de dados, que faz parte do esquema Prisma,
        define os modelos da sua aplicação (também chamados de modelos Prisma ).
        
        Modelos:
            - Represente as entidades do seu domínio de aplicação.
            - Mapeie as tabelas (bancos de dados relacionais como o PostgreSQL)
              ou coleções (MongoDB) em seu banco de dados.
            - Formam a base das consultas disponíveis na API do cliente Prisma gerada.

    RELACIONAMENTOS:
        1:1 -> UM PARA UM
        1:N -> UM PARA MUITOS
        N:N -> MUITOS PARA MUITOS

        Um para Um (1:N):
            - FK em uma tabela
            - outra tem array

        Uma caracteristica do Prisma para
        o relacionamento Muitos para Muitos (N:N):
            -> Ele cria automaticamente uma tabela intermediária:
                Exemplo de relação de Order para Product:
                OrderProduct
                    - orderId
                    - productId
            
            -> Aqui ambas tê marray
*/