import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-8 py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        AI-Native SEO for the AI-First Search Era
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Kasparro helps brands understand how they appear inside AI systems
        like ChatGPT, Gemini, and Perplexity.
      </p>

      <Link
        href="/platform"
        className="inline-block px-6 py-3 bg-white text-black rounded-lg"
      >
        Run AI-SEO Audit
      </Link>
    </section>
  );
}
