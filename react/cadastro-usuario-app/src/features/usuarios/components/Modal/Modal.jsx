import { useUsuariosMutation } from "../../hooks/useUsuariosMutation";
import { useUsuarios } from '../../hooks/useUsuarios';

import styles from './Modal.module.css';

function Modal() {
    const { usuarioParaExcluir, fecharModal } = useUsuarios();
    const { remove } = useUsuariosMutation();

    if (!usuarioParaExcluir) return null;

    function handleConfirmar() {
        remove.mutate(usuarioParaExcluir.id, fecharModal());
    }

    return (
        <div className={styles.overlayStyle}>
            <div className={styles.modalStyle}>
                <h3>Tem certeza?</h3>
                <p>Deseja realmente excluir
                    <strong> {usuarioParaExcluir?.nome}</strong>?
                </p>

                <div className={styles.divBotoes}>
                    <button onClick={handleConfirmar}>Sim</button>
                    <button onClick={fecharModal}>Cancelar</button>
                </div>
                <p className={styles.alerta}>
                    Atenção: Ao clicar em
                    <strong> Sim</strong>, não tem como reverter
                </p>
            </div>
        </div>
    );
}

export default Modal;