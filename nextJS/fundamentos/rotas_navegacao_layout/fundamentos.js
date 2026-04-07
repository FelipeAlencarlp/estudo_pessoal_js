/*
    1. ROTAS
        Conceito
            No next:
                pasta = rota

        Uma rota é sempre uma pasta, caso eu queira criar uma página
        diferente, basta criar uma pasta e dentro dela criar 'page'
        com o código ali.

        Ex:
            about/page.tsx
            dashboard/page.tsx

            Código - About
            export default function About() {
                return (
                    <div>
                        <h1>About</h1>
                    </div>
                );
            }

    2. NAVEGAÇÂO
        Ex:
            import Link from "next/link";

            export default function Home() {
                return (
                    <div>
                        <h1>Home</h1>

                        <nav style={{ display: 'flex', gap: '10px' }}>
                            <Link href="/about">Sobre</Link>
                            <Link href="/dashboard">Dashboard</Link>
                        </nav>
                    </div>
                );
            }

        O que está acontecendo:
            - 'Link' faz navegação sem reload
            - Igual SPA, mas com superpoderes (prefetch automático)

    3. LAYOUT (O MAIS IMPORTANTE)
        Conceito:
            O 'layout.tsx' é um componente que envolve todas as páginas
            -> Tipo um "App.js global" só que melhor

        Dentro de 'layout.tsx':
            - {children} = conteúdo da página atual
            - Header/Footer ficam fixos
            - Layout reaproveitável automático
        
            -> Muito utilizado em projetos reais
*/