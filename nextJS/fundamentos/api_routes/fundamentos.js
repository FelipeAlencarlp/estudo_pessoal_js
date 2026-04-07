/*
    API ROUTES (backend dentro do Next)
        Conceito
            No Next você pode criar backend assim:
                src/app/api/rota/route.ts
                -> Isso vira uma API automaticamente

        Ex: /users
            import { NextResponse } from "next/server";

            export async function GET() {
                const users = [
                    { id: 1, name: 'Felipe' },
                    { id: 2, name: 'João' }
                ];

                return NextResponse.json(users);
            }

        O QUE ACONTECEU
            - Foi criado uma API
            - Sem Express
            - Sem backend separado

            -> Isso é MUITO usado em produção

    CONSUMINDO API
        export default async function Dashboard() {
            const response = await fetch("http://localhost:3000/api/users");
            const users = await response.json();

            return (
                <div>
                    <h1>Dashboard</h1>
                    
                    <ul>
                        {users.map((user: any) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            );
        }

        POR QUE ISSO É DIFERENTE?
            -> Isso roda no servidor

            Então:
                - Não precisa 'useEffect'
                - Não precisa loading manual
                - Já chega pront

        AQUI TEMOS UM SSR: Server Side Rendering
        -> Roda no servidor

        REGRA SIMPLES
            - fetch em Server Component -> SSR
            - fetch com useEffect -> CSR
*/