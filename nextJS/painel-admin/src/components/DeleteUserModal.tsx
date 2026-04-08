import { PropsDeleteModal } from "@/types/PropsDeleteModal";

export default function DeleteUserModal({
    isOpen,
    onClose,
    onConfirm,
    name
}: PropsDeleteModal) {
    if (!isOpen) return null;

    return (
        <div
            className="
                flex justify-center items-center fixed
                top-0 left-0 w-full h-full bg-transparent
            "
        >
            <div className="
                bg-gray-200 p-6 rounded 
                border-3 border-gray-300 shadow-2xl w-80
            ">
                <h3 className="text-gray-600 text-2xl text-center mb-2">
                    Tem certeza?
                </h3>
                <p className="text-gray-600 text-center mb-2">
                    Deseja realmente excluir
                    <strong> {name}</strong>?
                </p>

                <div className="flex justify-end gap-1 mt-5">
                    <button
                        className="
                            bg-blue-500 text-white p-1.5 rounded
                            cursor-pointer text-xs hover:bg-blue-400
                        "
                        onClick={onConfirm}
                    >
                        Sim
                    </button>
                    <button
                        className="
                            bg-gray-500 text-white p-1.5 rounded
                            cursor-pointer text-xs hover:bg-gray-400
                        "
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
                <p className="text-right text-xs text-red-500 mt-2">
                    Atenção: Não pode ser revertido!
                </p>
            </div>
        </div>
    );
}