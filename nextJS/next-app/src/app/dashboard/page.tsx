export default async function Dashboard() {
    const response = await
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
            cache: "no-store"
        });
    const users = await response.json();

    return (
        <div>
            <h1>Dashboard SSR</h1>
            
            <ul>
                {users?.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}