"use client";

import { useState } from "react";

export default function CreateUser({ onUserCreated }: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [erroName, setErroName] = useState('');
    const [erroEmail, setErroEmail] = useState('');

    async function handleCreate() {
        let valido = true;

        if (!name.trim()) {
            setErroName('Nome é obrigatório');
            valido = false;
        } else if (name.length < 3) {
            setErroName('Nome deve ter pelo menos 3 caracteres');
            valido = false;
        } else {
            setErroName('');
        }

        if (!email.trim()) {
            setErroEmail('E-mail é obrigatório');
            valido = false;
        } else if (!email.includes('@')) {
            setErroEmail('E-mail inválido');
            valido = false;
        } else {
            setErroEmail('');
        }

        if (!valido) return;

        await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, phone }),
        });

        setName('');
        setEmail('');
        setPhone('');
        onUserCreated();
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-gray-600 text-xl mb-4">Adicionar Novo Usuário</p>

            <div className="flex mb-4">
                <div className="flex-col">
                    <input
                        title="Digitar nome"
                        placeholder="Digite o nome"
                        className="border rounded p-2 mr-2 border-gray-600 text-gray-600"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErroName('');
                        }}
                    />

                    {erroName &&
                        <p className="text-red-400 text-xs mb-3 mt-2">
                            {erroName}
                        </p>
                    }
                </div>

                <div className="flex-col">
                    <input
                        title="Digitar e-mail"
                        placeholder="email@email.com"
                        className="border rounded p-2 mr-2 border-gray-600 text-gray-600"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErroEmail('');
                        }}
                    />

                    {erroEmail &&
                        <p className="text-red-400 text-xs mb-3 mt-2">
                            {erroEmail}
                        </p>
                    }
                </div>
                
                <div className="flex-col">
                    <input
                        title="Digitar telefone"
                        placeholder="(99) 99999-9999"
                        className="border rounded p-2 mr-2 border-gray-600 text-gray-600"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        title="Adicionar usuário"
                        className="
                            bg-blue-500 text-white p-2
                            rounded cursor-pointer hover:bg-blue-400
                        "
                        onClick={handleCreate}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}