/*
    SERVER vs CLIENT COMPONENTS
        Aqui vai ser entendido:
            - O que roda no servidor
            - O que roda no navegador
            - Quando usar "use client"
            - Por que 'useState' às vezes "não funciona"

        Ex:
            import { useState } from "react";
            
            export default function About() {
                const [count, setCount] = useState(0);
            
                return (
                    <div>
                        <h1>Sobre</h1>
                        <p>Contador: {count}</p>
                        <button onClick={() => setCount(count + 1)}>
                            Aumentar
                        </button>
                    </div>
                );
            }

        O que acontece aqui
            -> Vai dar erro

        Erro:
            "You're importing a module that depends on `useState` into a React Server Component module. This API is only available in Client Components. To fix, mark the file (or its parent) with the `"use client"` directive."

        Isso acontece devido ao componente esta rodando no SERVIDOR

        O QUE ACONTECE REALMENTE
            Por padrão no Next.js:
                -> Todo arquivo dentro de 'app/' é um Server Component

            E Server Component:
                - NÂO usa 'useState'
                - NÂO usa 'useEffect'
                - NÂO tem interação (click, input, etc.)

            Porque:
                | Ele roda no servidor, não no navegador

        AGORA A VIRADA DE CHAVE
            Pense assim:
                Tipo                Onde roda       Pode usar estado?
                -------------------------------------------------
                Server Component    Servidor        Não
                -------------------------------------------------
                Client Component    Navegador       Sim

        !!!! SOLUÇÂO !!!!

            Transformar em Client Component
                'use client' -> adicionar no topo do arquivo

            O QUE ESSE 'use client' FAZ?
                -> Ele fala pro Next:
                    | "Esse componente precisa rodar no navegador"

    REGRA DE OURO !!
        | Use Server Component por padrão
        | Use Client só quando precisar de interação

    EXEMPLOS PRÁTICOS
        Server (ideal para):
            - Buscar dados (API, banco)
            - Renderizar conteúdo
            - SEO

        Client (use quando precisar):
            - Botão
            - Formulário (onSubmit)
            - Estado (useState)
            - Eventos (onClick)

    Usar 'use client' o mínimo possível!
*/