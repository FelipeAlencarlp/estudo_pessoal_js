/*
    Conceito - Forign Key
        É o que garante o relocionamento entre tabelas no banco.

        Foi aprendido até agora o JOIN "na mão".
        Agora o banco passa a garantir que a relação é válida.

        Modelo mental:
            Tendo:
                users | id | name

                orders | id | user_id

            REGRA
                'orders.user_id DEVE existir em users.id

                Se tentar inserir:
                    user_id = 999

                E esse usuário não existir:
                    O banco bloqueia

            O QUE ISSO RESOLVE
                - Evita dados inválidos
                - Mantém consistência
                - Garante integridade do sistema

        TIPOS DE COMPORTAMENTO (importante)
            Quando você deleta um usuário, o que acontece com os pedidos?

            Você define isso:
                - 'ON DELETE CASCADE' -> apaga os pedidos juntos
                - 'ON DELETE SET NULL' -> mantém pedidos, mas remove o vínculo
                - 'ON DELETE RESTRICT' -> impede deletear 
*/