/**
 * Navbar Component
 * 
 * This component renders the navigation bar for the application. It includes links to the Home,
 * Platform, and About pages. The navigation bar is styled to align with the overall design system.
 *
 * Props: None
 *
 * Usage:
 * ```jsx
 * <Navbar />
 * ```
 */
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      <h1 className="text-lg font-semibold">Kasparro</h1>
      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-gray-800">
          Home
        </Link>
        <Link href="/platform" className="text-gray-600 hover:text-gray-800">
          Platform
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-800">
          About
        </Link>
      </div>
    </nav>
  );
}
