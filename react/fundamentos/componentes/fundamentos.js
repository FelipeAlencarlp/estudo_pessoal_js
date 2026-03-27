/*
    React é basicamente:
        - Funções que retornam HTML (JSX)
        - Estado (dados que mudam)
        - Reatividade (quando muda, a tela atualiza)

    Instalação do React:
        Fazer a instalação via Vite é mais rapido que usar Create React App
        1. No terminal:
            npm create vite@latest

            Vai aparecer um assistente:
                Preencha:
                    - Nome do projeto -> meu-app-react
                    - Framework -> React
                    - Variante -> JavaScript

        2. Entrar na pasta
            cd meu-app-react
        
        3. Instalar dependências
            npm install
            -> aqui é baixado tudo que o projeto precisa
        
        4. Rodar projeto
            npm run dev

        O que acabou de acontecer? IMPORTANTE
            Foi criado um ambiente com:
                - React
                - Vite (servidor rápido)
                - Babel (traduz JSX)
                - Estrutura moderna

-----------------------------------------------------------------------

    Estrutura do Projeto
        Dentro da pasta:
            meu-app-react
            |---node_modules/
            |---public/
            |---src/
            |   |---App.jsx
            |   |---main.jsx
            |---index.html
        
        Arquivos principais
            * main.jsx
                import { StrictMode } from 'react'
                import { createRoot } from 'react-dom/client'
                import './index.css'
                import App from './App.jsx'
                
                createRoot(document.getElementById('root')).render(
                  <StrictMode>
                    <App />
                  </StrictMode>,
                )
            -> Aqui o React começa a rodar

            * App.jsx
                function App() {
                return <h1>Hello World!</h1>
                }

                export default App
            -> Esse é o primeiro componente

            * index.html
                <div id="root"></div>
            -> React injeta tudo aqui dentro

    RESUMO
        Fluxo do React:
            index.html -> main.jsx -> App.jsx -> tela

-----------------------------------------------------------------------

    1. O que é um componente?
        Um componente é literalmente uma função JavaScript.

        Ex: JSX
            function App() {
                return <h1>Olá mundo</h1>;
            }

        O que está acontecendo aqui:
            - function App() -> componente criado
            - return <h1>...</h1> -> isso é JSX
            - JSX = HTML dentro do JavaScript

        Importante (conceito-chave)
            React não usa HTML direto, ele usa JSX.

            Exemplo:
                const elemento = <h1>Oi</h1>;

                isso vira (por baixo dos panos):
                    React.createElement('h1', null, 'Oi');

        Regras sobre componentes:
            1. Nome sempre com letra maiúscula
                function Header() {} certo
                function header() {} errado
                -> se for minúsculo o React acha que é HTML.

            2. Componente = função pura
                let contador = 0;
                function App() {
                    contador++;
                    return <h1>{contador}</h1>
                }
                **-> Isso quebra o comportamento do React depois.

                |-> Componente deve apenas receber dados e renderizar UI
*/