export type PropsDeleteModal = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    name?: string;
};