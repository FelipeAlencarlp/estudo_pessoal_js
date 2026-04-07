"use client";

import { useState } from "react";

export default function About() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Sobre</h1>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Aumentar
            </button>
        </div>
    );
}