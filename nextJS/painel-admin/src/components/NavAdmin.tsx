"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavAdmin() {
    const pathname = usePathname();

    const menu = [
        { name: "Dashboard", href: "/admin" },
        { name: "Usuários", href: "/admin/users" },
    ];

    return (
        <nav className="flex flex-col gap-3">
            {menu.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        title={item.name}
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
    );
}