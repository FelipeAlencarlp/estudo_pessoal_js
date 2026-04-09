"use client";

import { useState, useEffect } from "react";
import { PropsEditModal } from "@/types/PropsEditModal";
import Modal from "./Modal";

export default function EditUserModal({
    user,
    isOpen,
    onClose,
    onConfirm
}: PropsEditModal) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [erroName, setErroName] = useState('');
    const [erroEmail, setErroEmail] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
        }
    }, [user]);

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="text-gray-600 text-2xl font-bold mb-3">Editar Usuário</h3>

            <input
                type="text"
                className="border p-2 w-full mb-3 text-gray-500 rounded"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setErroName('');
                }}
            />

            {erroName &&
                <p className="text-red-400 text-xs mb-3">
                    {erroName}
                </p>
            }

            <input
                type="email"
                className="border p-2 w-full mb-3 text-gray-500 rounded"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setErroEmail('');
                }}
            />

            {erroEmail &&
                <p className="text-red-400 text-xs mb-3">
                    {erroEmail}
                </p>
            }

            <input
                type="text"
                className="border p-2 w-full mb-3 text-gray-500 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <div className="flex gap-2 justify-end">
                <button
                    className="
                        bg-blue-500 text-white px-3 py-1 rounded
                        hover:bg-blue-400
                    "
                    onClick={() => onConfirm(name, email, phone)}
                >
                    Salvar
                </button>

                <button
                    className="
                        bg-gray-500 px-3 py-1 rounded
                        hover:bg-gray-400
                    "
                    onClick={onClose}
                >
                    Cancelar
                </button>
            </div>
        </Modal>
    );
}