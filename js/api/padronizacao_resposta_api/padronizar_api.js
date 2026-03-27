/*
    Isso é algo muito comum em APIs feitas com Express.js rodando em Node.js
    e conectadas ao PostgreSQL.

    API normal:
        [
            {
                'id': 1,
                'nome': 'Felipe'
            }
        ]
        - funciona mas não é um padrão profissional

    Por que padronizar repostas da API?
        Porque facilita MUITO para quem consome a API (frontend, mobile, etc).

        Com padrão, todas respostas seguem a mesma estrutura.

        Exemplo:
            SUCESSO
                JSON
                {
                    'success': true,
                    'data': [...]
                }

            ERRO
                JSON
                {
                    'success': false,
                    'error': 'Usuário não encontrado'
                }

        Agora o frontend sempre sabe:
            se success === true -> usar data
            se success === false -> mostrar error
*/