"use client";

import { useParams } from "next/navigation";

export default function UsuarioNome() {
    const params = useParams();

    return <p>Olá, {params.nome}</p>;
}