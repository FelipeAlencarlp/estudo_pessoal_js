import { PropsDeleteModal } from "@/types/PropsDeleteModal";
import Modal from "./Modal";

export default function DeleteUserModal({
    isOpen,
    onClose,
    onConfirm,
    name
}: PropsDeleteModal) {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="text-gray-600 text-2xl text-center mb-2">
                Tem certeza?
            </h3>
            <p className="text-gray-600 text-center text-xl mb-2">
                Deseja realmente excluir
                <strong> {name}</strong>?
            </p>

            <div className="flex justify-end gap-2 mt-5">
                <button
                    className="
                        bg-blue-500 text-white px-2 py-1 rounded
                        cursor-pointer hover:bg-blue-400
                    "
                    onClick={onConfirm}
                >
                    Sim
                </button>
                <button
                    className="
                        bg-gray-500 text-white px-2 py-1 rounded
                        cursor-pointer hover:bg-gray-400
                    "
                    onClick={onClose}
                >
                    Cancelar
                </button>
            </div>
            <p className="text-right text-xs text-red-500 mt-2">
                Atenção: Não pode ser revertido!
            </p>
        </Modal>
    );
}