import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <h2 className="font-bold mb-8">Kasparro</h2>
      <nav className="space-y-4">
        <Link href="/app/dashboard">Dashboard</Link>
        <Link href="/app/audit">Audit</Link>
        <Link href="/app/architecture">Architecture</Link>
      </nav>
    </aside>
  );
}
