"use client";

import { useRouter } from "next/navigation";
    
export default function LogoutButton() {
    const router = useRouter();
    
    function handleLogout() {
        document.cookie = 'auth=; path=/; max-age=0';
        router.push('/login');
    }

    return (
        <button
            title="Sair"
            className="
                mt-5 bg-red-500 p-2 rounded w-full
                cursor-pointer hover:bg-red-600
            "
            onClick={handleLogout}
        >
            Sair
        </button>
    );
}