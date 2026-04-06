import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletarUsuario } from '../../services/api';
import { useUsuarios } from '../../hooks/useUsuarios';

import styles from './Modal.module.css';

function Modal() {
    const { usuarioParaExcluir, fecharModal } = useUsuarios();

    const queryClient = useQueryClient();

    const deleteMutation = useMutation({
        mutationFn: deletarUsuario,
        onSuccess: () => {
            queryClient.invalidateQueries(['usuarios']);
            fecharModal();
        }
    });

    if (!usuarioParaExcluir) return null;

    function handleConfirmar() {
        deleteMutation.mutate(usuarioParaExcluir.id);
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
            </div>
        </div>
    );
}

export default Modal;