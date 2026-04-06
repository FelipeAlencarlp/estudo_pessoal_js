import { useQuery } from "@tanstack/react-query";
import { getUsuarios } from "../services/usuariosApi";

export function useUsuariosQuery() {
    return useQuery({
        queryKey: ['usuarios'],
        queryFn: getUsuarios 
    });
}