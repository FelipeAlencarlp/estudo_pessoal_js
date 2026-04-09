import { User } from "./User";

export type PropsEditModal = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (name: string, email: string, phone: string) => void;
};