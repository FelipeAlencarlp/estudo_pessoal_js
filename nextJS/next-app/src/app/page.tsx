import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link href="/about">Sobre</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}
