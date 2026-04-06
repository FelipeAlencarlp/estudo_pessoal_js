import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
    const [usuarios, setUsuarios] = useLocalStorage('usuarios', []);
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [usuarioParaExcluir, setUsuarioParaExcluir] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const cadastrarUsuario = (nome, email, telefone) => {
        const novo = {
            id: Date.now(),
            nome,
            email,
            telefone
        };

        setUsuarios([...usuarios, novo]);
    };

    const emailExiste = (email) => {
        return usuarios.some((usuario) => usuario.email === email);
    };

    const editarUsuario = (id, novoNome, novoEmail, novoTelefone) => {
        const novos = usuarios.map((usuario) =>
            usuario.id === id
            ? { 
                ...usuario,
                nome: novoNome,
                email: novoEmail,
                telefone: novoTelefone 
            } : usuario
        );

        setUsuarios(novos);
        setUsuarioEditando(null);
    };

    const pedirConfirmacao = (usuario) => {
        setUsuarioParaExcluir(usuario);
        setMostrarModal(true);
    };

    const confirmarExclusao = () => {
        const novos = usuarios.filter(
            (usuario) => usuario.id !== usuarioParaExcluir.id
        );

        setUsuarios(novos);
        setMostrarModal(false);
        setUsuarioParaExcluir(null);
    };

    return (
        <UsuariosContext.Provider
            value={{
                usuarios,
                cadastrarUsuario,
                emailExiste,
                editarUsuario,
                pedirConfirmacao,
                confirmarExclusao,
                usuarioEditando,
                setUsuarioEditando,
                usuarioParaExcluir,
                mostrarModal,
                setMostrarModal
            }}
        >
            {children}
        </UsuariosContext.Provider>
    );
}