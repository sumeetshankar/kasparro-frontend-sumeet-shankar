import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-xl font-bold">Kasparro</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/platform">Platform</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
