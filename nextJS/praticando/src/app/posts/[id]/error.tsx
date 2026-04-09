"use client";

import { useEffect } from "react";

export default function Error({
    error, reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex gap-5 items-center">
            <h2>Post não encontrado</h2> |
            <button
                className="
                    bg-blue-500 hover:bg-blue-400 
                    px-2 py-1 rounded cursor-pointer
                "
                onClick={() => reset()}
            >
                Tentar novamente
            </button>
        </div>
    );
}