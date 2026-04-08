import styles from './Modal.module.css';

function Modal() {
    return (
        <div className="
            flex justify-center items-center fixed
            top-0 left-0 w-full h-full bg-transparent
        ">
            <div className="bg-white p-5 rounded-tr-xl">
                <h3>Tem certeza?</h3>
                <p>Deseja realmente excluir
                    <strong> {usuarioParaExcluir?.nome}</strong>?
                </p>

                <div className="flex justify-end gap-2.5 mt-1">
                    <button>Sim</button>
                    <button>Cancelar</button>
                </div>
                <p className="align-text-right text-xs text-red-500">
                    Atenção: Ao clicar em
                    <strong> Sim</strong>, não tem como reverter
                </p>
            </div>
        </div>
    );
}

export default Modal;