import './App.css'

import { useState } from 'react';

import Formulario from './components/Formulario/Formulario';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios';
import Modal from './components/Modal/Modal';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [usuarioParaExcluir, setUsuarioParaExcluir] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cadastrarUsuario = (nome, email) => {
    const novo = {
      id: Date.now(),
      nome,
      email
    };

    setUsuarios([...usuarios, novo]);
  };

  const emailExiste = (email) => {
    return usuarios.some((usuario) => usuario.email === email);
  };

  const editarUsuario = (id, novoNome, novoEmail) => {
    const novos = usuarios.map((usuario) =>
      usuario.id === id
        ? { ...usuario, nome: novoNome, email: novoEmail }
        : usuario
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
    <>
      <Formulario
        cadastrarUsuario={cadastrarUsuario}
        editarUsuario={editarUsuario}
        usuarioEditando={usuarioEditando}
        emailExiste={emailExiste}
      />

      <ListaUsuarios
        usuarios={usuarios}
        usuarioEditando={usuarioEditando}
        setUsuarioEditando={setUsuarioEditando}
        pedirConfirmacao={pedirConfirmacao}
      />

      <Modal
        aberto={mostrarModal}
        usuarioParaExcluir={usuarioParaExcluir}
        onConfirmar={confirmarExclusao}
        onCancelar={() => setMostrarModal(false)}
      />
    </>
  );
}

export default App
