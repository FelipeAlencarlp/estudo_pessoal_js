import { useContext } from "react";
import { UsuariosContext } from "../contexts/UsuariosContext";

export function useUsuarios() {
    return useContext(UsuariosContext);
}