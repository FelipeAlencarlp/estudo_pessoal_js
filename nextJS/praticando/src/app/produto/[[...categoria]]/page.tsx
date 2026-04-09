"use client";

import TituloPagina from "@/components/TituloPagina";
import { useParams } from "next/navigation";

export default function Produto() {
    const params = useParams();

    const categoria = params.categoria?.slice(0, 1);
    const id = params.categoria?.slice(1, 2);

    return (
        <>
            <TituloPagina>Produtos</TituloPagina>

            <p>Categoria: {categoria}</p>
            <p>Produto ID: {id}</p>
        </>
    );
}