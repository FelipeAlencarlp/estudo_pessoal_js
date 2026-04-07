/*
    SSR vs CSR
        CONCEITO:
            SSR (Server Side Rendering)
                - Roda no servidor
                - Já entrega HTML pronto
                - Melhor pra SEO e performance inicial

                const data = await fetch(...)
                -> sem usar 'useEffect'

            CSR (Client Side Rendering)
                - Roda no navegador
                - Carrega vazio -> depois busca dados
                - Usa estado

                "use client"

                useEffect(() => {
                    fetch(...)    
                }, [])

        DIFERENÇA VISUAL (REAL)
            SSR:
                - Página já vem com dados
                - Sem loading (ou quase)

            CSR:
                - Página carrega -> depois aparece conteúdo

    EXEMPLO DE UM SSR:
        export default async function Dashboard() {
            const response = await fetch(`http://localhost:3000/api/users`);
            const users = await response.json();

            return (
                <div>
                    <h1>Dashboard SSR</h1>
                    
                    <ul>
                        {users?.map((user: any) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            );
        }

    EXEMPLO DE UM CSR:
        "use client";

        import { useEffect, useState } from "react";

        export default function DashboardClient() {
            const [users, setUsers] = useState<any>([]);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                async function fetchUsers() {
                    const response = await fetch("/api/users");
                    const data = await response.json();

                    setUsers(data);
                    setLoading(false);
                }

                fetchUsers();
            }, []);

            if (loading) {
                return <p>Carregando...</p>
            }

            return (
                <div>
                    <h1>Dashboard CSR</h1>

                    <ul>
                        {users.map((user: any) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            );
        }


    PERCEPÇÂO IMPORTANTE
        SSR:
            -> já vem com os dados carregados

        CSR:
            aparece:
                Carregando...
            -> depois os dados


    RESUMO PROFISSIONAL
        Situação                    Usa
        -------------------------------------------
        SEO / Performance           SSR
        -------------------------------------------
        Interaçção / tempo real     CSR
        -------------------------------------------
        Dashboard admin             Mistura os dois

    NÂO ESCOLHO UM
    -> Combino os dois


    PERGUNTA:
        -> Por que um dashboard geralmente usa CSR mesmo existindo
            SSR?

        Resposta:
            -> Dashboard usa mais CSR porque:
                1. Dados mudam o tempo todo
                    - usuários
                    - pedidos
                    - notificações

                    -> SSR ficaria fazendo requisição a cada reload

                2. Experiência do usuário
                    - filtros
                    - buscas
                    - paginação
                    - ações em tempo real

                    -> isso é estado -> precisa de Client

                3. Não precisa de SEO
                Dashboard:
                    - é privado
                    - não aparece no Google

                    -> SSR perde importância aqui

            RESUMO:
                | Dashboard usa CSR porque precisa de
                | interatividade + dados dinâmicos constantes


            SEMPRE PENSAR: "Onde usar cada um"
                Exemplo:
                    Dashboard profissional:
                        SSR:
                            - carregar dados iniciais
                            - autenticação

                        CSR:
                            - filtros
                            - ações do usuário
                            - atualizações

                        -> mistura dos dois
*/