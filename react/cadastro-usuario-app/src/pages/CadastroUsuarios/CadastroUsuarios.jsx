import { UsuariosProvider } from '../../contexts/UsuariosContext';

import Formulario from '../../components/Formulario/Formulario';
import ListaUsuarios from '../../components/ListaUsuarios/ListaUsuarios';
import Modal from '../../components/Modal/Modal';

function CadastroUsuarios() {
    return (
        <UsuariosProvider>
            <Formulario />
            <ListaUsuarios />
            <Modal />
        </UsuariosProvider>
    );
}

export default CadastroUsuarios;