import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export function UsuariosProvider({ children }) {
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [usuarioParaExcluir, setUsuarioParaExcluir] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const pedirConfirmacao = (usuario) => {
        setUsuarioParaExcluir(usuario);
        setMostrarModal(true);
    };

    const fecharModal = () => {
        setMostrarModal(false);
        setUsuarioParaExcluir(null);
    };

    return (
        <UsuariosContext.Provider
            value={{
                usuarioEditando,
                setUsuarioEditando,
                usuarioParaExcluir,
                mostrarModal,
                pedirConfirmacao,
                fecharModal
            }}
        >
            {children}
        </UsuariosContext.Provider>
    );
}