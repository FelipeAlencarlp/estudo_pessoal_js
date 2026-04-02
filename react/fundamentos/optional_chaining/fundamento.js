/*
    Optional Chaining (Encadeamendo Opcional)

    O que sifnifica:
        -> "Acesse isso somente se existir"

    Ex:
        usuario?.id

    Tradução mental:
        "Se 'usuario' existir, pega o '.id'
        senão, retorna 'undefined' sem quebar"

    SEM ?. (problema)
        usuario.id

        se for:
            usuario = null
        
        -> ERRO:
            Cannot read properties of null
            
    COM ?.
        usuario?.id

        se for null:
            retorn 'undefined' (sem erro)

    EXEMPLO SIMPLES
        const user = null;

        console.log(user?.name); // undefined
        -> sem crash

    RESUMO
    Código          Significado
    ----------------------------------------
    obj?.prop       acessa só se existir
    ----------------------------------------
    evita erro      sim
    ----------------------------------------
    retorna         undefined se não existir

    REGRA MENTAL
        Smpre que tiver algo que pode ser:
            - null
            - undefined
        -> usa ?.

*/