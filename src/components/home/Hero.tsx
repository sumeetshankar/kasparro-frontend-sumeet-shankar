/**
 * Hero Component
 *
 * This component renders the hero section of the homepage. It includes a title, a description,
 * and a call-to-action button to run the AI-SEO audit.
 *
 * Props: None
 *
 * Usage:
 * ```jsx
 * <Hero />
 * ```
 */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI-Native SEO for the AI-First Search Era
      </h1>

      <p className="text-gray-500 max-w-xl mx-auto mb-6">
        Kasparro helps brands understand how they appear inside AI systems
        like ChatGPT, Gemini, and Perplexity.
      </p>

      <Link
        href="/platform"
        className="inline-block px-5 py-2 bg-blue-500 text-white rounded-md"
      >
        Run AI-SEO Audit
      </Link>
    </section>
  );
}