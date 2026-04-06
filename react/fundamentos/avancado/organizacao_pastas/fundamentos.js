/*
    A organização de pastas vem para transformar o projeto em algo
    profissional

    Exemplo:
        src/
            components/
            contexts/
            hooks/
            pages/
            services/
            styles/

    CONCEITO IMPORTANTE
        Componentização não é só qubrar em arquivos
        é:
            | dividir responsabilidades de forma inteligente
    
    PADRÂO QUE VAMOS UTILIZAR
        components/
        -> componentes reutilizáveis

            components/
                Button/
                    Button.jsx
                    Button.module.css

                Modal/
                    Modal.jsx
                    Modal.module.css

            pages/
            -> telas principais

                pages/
                    Usuarios/
                        Usuarios.jsx

            contexts/
                ThemeContext.jsx

            hooks/
                uselocalStorage.jsx

            services/
            -> API
                services/   
                    api.js

    DIFERENÇA IMPORTANTE

        Tipo        Exemplo
        -------------------------------
        página      tela inteira
        -------------------------------
        componente  pedaço reutilizável

    BENEFÍCIO REAL
        -> quando projeto crescer:
            - sei onde estará tudo
            - outros devs entendem rápido
            - manutenção fácil
*/