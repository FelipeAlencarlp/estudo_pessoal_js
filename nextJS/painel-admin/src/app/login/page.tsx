"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const router = useRouter();

    function handleLogin() {
        let valido = true;

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

        //fake login
        document.cookie = 'auth=true; path=/'

        router.push('/admin');
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="bg-white p-6 rounded shadow w-80">
                <h1 className="text-xl mb-4 font-bold text-gray-800">Login</h1>

                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full border p-2 mb-3 rounded text-gray-600"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErroEmail('');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleLogin;
                        }
                    }}
                />

                {erroEmail && 
                    <p className="text-red-400 text-xs mb-3">{erroEmail}</p>
                }

                <button
                    onClick={handleLogin}
                    className="
                        w-full bg-blue-600 text-white p-2 rounded
                        cursor-pointer hover:bg-blue-700
                    "
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}