/*
    O que é renderização condicional?
        -> Mostrar ou esconder coisas baseado em uma condição

    Exemplo:
        - usuário logado -> mostra dashboard
        - não logado -> mostra login
        - carregando -> mostra 'Loading...'

    ERROS COMUNS:
        X usar if dentro do JSX
            return (
                <div>
                    if (logado) {...}
                </div>
            );
            -> JSX não aceita isso

        Esquecer retorno
            if (logado) {
                <h1>Oi</h1>
            }
            -> faltou return

    RESUMO
        Situação            Como usar
        -----------------------------
        Trocar tudo         if
        -----------------------------
        Escolher entre 2    ? :
        -----------------------------
        Mostrar se true     &&
*/