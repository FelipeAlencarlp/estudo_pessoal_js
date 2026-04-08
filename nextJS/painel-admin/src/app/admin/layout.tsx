import type { Metadata } from "next";
import LogoutButton from "@/components/LogoutButton";
import NavAdmin from "@/components/NavAdmin";

export const metadata: Metadata = {
  title: "Painel Admin",
};

export default function AdminLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold mb-5">Admin</h2>

                <NavAdmin />

                <LogoutButton />
            </aside>

            {/* Conteúdo */}
            <main className="flex-1 p-6 bg-gray-100">
                {children}
            </main>
        </div>
    );
}