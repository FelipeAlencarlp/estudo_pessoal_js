"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
} : {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const menu = [
        { name: "Dashboard", href: "/admin" },
        { name: "Usuários", href: "/admin/users" },
    ];

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold mb-5">Admin</h2>

                <nav className="flex flex-col gap-3">
                    {menu.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    block p-2 rounded transition
                                    ${isActive
                                        ? "bg-gray-700 font-semibold"
                                        : "hover:bg-gray-800"
                                    }    
                                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Conteúdo */}
            <main className="flex-1 p-6 bg-gray-100">
                {children}
            </main>
        </div>
    );
}