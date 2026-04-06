import { useUsuarios } from '../../hooks/useUsuarios';
import styles from './Modal.module.css';

function Modal() {
    const {
        mostrarModal,
        usuarioParaExcluir,
        confirmarExclusao,
        setMostrarModal
    } = useUsuarios();

    if (!mostrarModal) return null;

    return (
        <div className={styles.overlayStyle}>
            <div className={styles.modalStyle}>
                <h3>Tem certeza?</h3>
                <p>Deseja realmente excluir
                    <strong> {usuarioParaExcluir?.nome}</strong>?
                </p>

                <div className={styles.divBotoes}>
                    <button onClick={confirmarExclusao}>Sim</button>
                    <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;