/*
    O QUE É REACT QUERY?
        -> Biblioteca para lidar com dados de API

    PROBLEMA SEM REACT QUERY
        Faria assim:
            const [usuarios, setUsuarios] = useState([]);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                fetch('/api/usuarios)
                    .then(res => res.json())
                    .then(data => {
                        setUsuarios(data);
                        setLoading(false);
                    });
            }, []);

        Problemas:
            - loading manual
            - erro manual
            - refetch manual
            - cache inexistente
            - código repetido

    SOLUÇÂO: REACT QUERY
        Ele cuida de:
            - cache
            - loading
            - erro
            - atualização automática
        
    MUDANÇA DE MENTALIDADE
        Antes:
            você controla tudo

        Agora:
            React Query controla dados

    PASSO 1 - Instalar
        npm install @tanstack/react-query

    PASSO 2 - Configurar Provider
        main.jsx ou App.jsx
            import { QueryCliente, QueyrClientProvider } from "@tanstack/react-query";

            const queryClient = new QueryClient();

            function App() {
                return (
                    <QueryClientProvider client={queryClient}>
                        <Componente/>
                    </QueryClientProvider>
                );
            }

        O QUE ISSO FAZ?
            -> habilita React Query na aplicação inteira

    PASSO 3 - Criar "fake API"
        Simulando API:
            service/api.js
                export async function getUsuarios() {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve([
                                { id: 1, nome: 'Felipe', email: 'felipe@email.com' },
                                { id: 2, nome: 'Ana', email: 'ana@email.com' },
                            ]);
                        }, 1000);
                    });
                }

    PASSO 4 - Usar useQuery
        ListaUsuarios.jsx
            import { useQuery } from '@tanstack/react-query';
            import { getUsuarios } from '../../services/api';

            function ListaUsuarios() {
                cont { data, isLoading, error } = useQuery({
                    queryKey: ['usuarios'],
                    queryFn: getUsuario
                });

                if (isLoading) return <p>Carregando...</p>;

                if (error) return <p>Erro ao carregar</p>;

                return (
                    <ul>
                        {data.map((u) => {
                            <li key={u.id}>{u.nome}</li>    
                        })}
                    </ul>
                );
            }

    DESTRINCHANDO
        - useQuery
        -> hook que busca dados

        - queryKey
            ['usuarios']
        -> identificador do cache

        - queryFn
        -> função que busca dados

        - retorno
            data
            isLoading
            error
*/