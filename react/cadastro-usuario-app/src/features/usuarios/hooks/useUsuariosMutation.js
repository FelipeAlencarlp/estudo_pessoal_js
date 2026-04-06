import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
} from '../services/usuariosApi';

export function useUsuariosMutation() {
    const queryClient = useQueryClient();

    const create = useMutation({
        mutationFn: criarUsuario,
        onSuccess: () => {
            queryClient.invalidateQueries(['usuarios']);
        }
    });

    const update = useMutation({
        mutationFn: atualizarUsuario,
        onSuccess: () => {
            queryClient.invalidateQueries(['usuarios']);
        }
    });

    const remove = useMutation({
        mutationFn: deletarUsuario,
        onSuccess: () => {
            queryClient.invalidateQueries(['usuarios']);
        }
    });

    return { create, update, remove };
}
