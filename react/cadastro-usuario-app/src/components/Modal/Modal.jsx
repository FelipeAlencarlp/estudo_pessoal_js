import styles from './Modal.module.css';

function Modal({ aberto, usuarioParaExcluir, onConfirmar, onCancelar }) {
    if (!aberto) return null;

    return (
        <div className={styles.overlayStyle}>
            <div className={styles.modalStyle}>
                <h3>Tem certeza?</h3>
                <p>Deseja realmente excluir
                    <strong> {usuarioParaExcluir?.nome}</strong>?
                </p>

                <div className={styles.divBotoes}>
                    <button onClick={onConfirmar}>Sim</button>
                    <button onClick={onCancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;