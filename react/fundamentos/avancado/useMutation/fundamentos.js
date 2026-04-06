/*
    useMutation (CRUD REAL)

    Se useQuery busca dados
    -> useMutation = alterar dados
        - criar
        - editar
        - deletar

    PASSO 1 - Criar função de API
        services/api.js

        export async function criarUsuario(novoUsuario) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(novoUsuario);   
                }, 500)    
            });
        }

    PASSO 2 - Usar useMutation
        Formulario.jsx
            import { useMutation, useQueryClient } from '@tanstack/react-query';
            import { criarUsuario } from '../../services/api.js';

        -> dentro do componente
            const queryClient = useQueryClient();

            const mutation = useMutation({
                mutationFn: criarUsuario,
                onSuccess: () => {
                    queryClient.invalidateQueries(['usuarios']);    
                }
            });

    DESTRINCHANDO
        - useMutation
        -> executa ações (POST, PUT, DELETE)

        queryClient
        -> controla o cache global

        invalidateQueries
        ['usuarios']
        -> fala:
            | "ei, refaz essa query"

    PASSO 3 - Usar no submit
        Subistitui:
            cadastrarUsuario(nome, email);

        por:
            mutation.mutate({
                id: Date.now(),
                nome,
                email
            });

    RESULTADO
        - adiciona usuário
        - React Query refaz a query
        - lista atualizada automaticamente

    MENTALIDADE NOVA
        Antes:
            estado local controla tudo

        Agora: 
            servidor (API) controla dados
            React Query sincronia
*/