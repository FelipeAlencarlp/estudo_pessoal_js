import { PropsModal } from "@/types/PropsModal";

export default function Modal({ isOpen, onClose, children }: PropsModal) {
    if (!isOpen) return null;

    return (
        <div className="
            flex justify-center items-center fixed
            top-0 left-0 w-full h-full bg-black/50
        ">
            <div className="
                bg-gray-200 p-6 rounded 
                border-3 border-gray-300 shadow-2xl w-90
            ">
                {children}
            </div>
        </div>
    );
}