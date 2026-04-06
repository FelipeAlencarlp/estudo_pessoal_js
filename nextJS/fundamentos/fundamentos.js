/*
    VISÂO GERAL DO QUE É NEXT.JS

    O Next.js é um frameword React fullstack.

    Ou seja, ele resolve problemas que você tinha no React puro.

    Antes (React)
        - só frontend
        - precisa configurar roteamento
        - precisa backend separado
        - SEO ruim (CSR)

    Agora (Next.js)
        - Front + Back no mesmo projeto
        - roteamento automático
        - Server Side Rendering (SSR)
        - API integrada
        - Performance absurda

    DIFERENÇA QUE MUDA TUDO
        No React você pensava assim:
            | "Tudo roda no navegador"

        No Next.js você pensa assim:
            | "Parte roda no servidor, parte no cliente"

    ESTRUTURA NOVA (App Router)
        Next usa uma estrutura baseada em pastas = rotas.
        Exemplo:
            app/
                page.tsx    -> "/"
                about/
                    page.tsx    -> "/about"

            -> Sem React Router. Sem config. Só criar pasta.

    CRIAR NOVO PROJETO
        No terminal:
            npx create-next-app@latest

        Responda:
            -> Project name -> 'nome do projeto'
            -> Use TypeScript? -> YES
            -> Use ESLint? -> YES
            -> Use Tailwind -> YES
            -> Use App Router? -> YES
            -> Use src/ directory? -> YES
            -> Use import alias? -> YES

        Depois:
            cd 'nome do projeto'
            npm run dev

        Acesse:
            http://localhost:3000

    ENTENDENDO ESTRUTURA
        Abra:
            src/app/page.tsx
            -> Esse arquivo é sua Home.

    ALTERAR PÁGINA
        Substituia tudo por:
            export default function Home() {
                return (
                    <div>
                        <h1>Meu primeiro projeto Next.js</h1>
                        <p>Começando do zero com Next + TypeScript</p>
                    </div>
                );
            }

    ENTENDENDO
        - page.tsx
        -> Sempre representa uma rota

        - export default function
        -> Componente React normal

        -> Até aqui = React nomral + estrutura mágica

    DIFERENÇA IMPORTANTE
        No Next:
            - Arquivos são Server Components por padrão
        
        Isso significa:
            - Rodam no servidor
            - Não têm acesso a 'useState' diretamente

            
*/