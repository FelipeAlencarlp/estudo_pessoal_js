"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavHeader() {
    const pathname = usePathname();

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Perfil', href: '/perfil' },
    { name: 'Produto', href: '/produto' },
    { name: 'Posts', href: '/posts' },
  ];

    return (
        <nav className="flex justify-center gap-5">
            {menu.map((item) => {
                const isActive = pathname === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
                            block rounded p-2 transition
                            ${isActive
                                ? "bg-gray-400 font-semibold"
                                : "hover:bg-gray-500"
                            }
                        `}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </nav>
    );
}