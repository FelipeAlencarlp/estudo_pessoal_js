"use client";

import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col border p-5 items-center w-40">
            <h2 className="text-xl mb-3">Contador</h2>

            <p className="text-xs mb-2">Contagem: {count}</p>

            <button
                className="bg-blue-500 py-1 px-2 text-xs hover:bg-blue-400"
                onClick={() => setCount(count + 1)}
            >
                Aumentar
            </button>
        </div>
    );
}