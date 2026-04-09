import { User } from "@/types/User";

export async function getUsers(): Promise<User[]> {
    const response = await fetch(`
            ${process.env.NEXT_PUBLIC_BASE_URL}/api/users
        `, {
            cache: 'no-store',
        }
    );

    return response.json();
}

export async function updateUser(
    id: number, name: string, email: string, phone: string
) {
    await fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify({ id, name, email, phone })
    });
}

export async function deleteUser(id: number) {
    await fetch('/api/users', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
    });
}